"""Synthesized score for the YouTube bumper, locked to the cut points in bumper.html.

No licensed library or music generator is available, so this builds it from scratch:
a detuned string-ensemble pad that opens up under the montage, a felt-piano note on
every photo cut (climbing, getting louder as the cuts speed up), a soft sub pulse under
each cut, a beat of air as the screen goes to ink, then a D add9 bloom as the mark draws on.
Convolution reverb on everything. No drums, no risers.

    pip install numpy scipy soundfile pyloudnorm
    python3 projects/youtube-bumper/score.py   ->  exports/youtube-bumper/bumper-score.wav
"""
import os
import numpy as np
import soundfile as sf
from scipy.signal import fftconvolve, butter, sosfilt

SR = 48000
DURATION = 6.0
rng = np.random.default_rng(7)

# Same list as SHOTS in bumper.html (seconds on screen)
SHOT_DURS = [.34, .30, .27, .24, .22, .20, .18, .17, .16, .15, .14, .13, .36]
CUTS = np.concatenate([[0], np.cumsum(SHOT_DURS)[:-1]])
MONTAGE_END = float(np.sum(SHOT_DURS))  # 2.86s: cut to ink
MARK = MONTAGE_END + .08                # mark starts drawing

N = int(SR * DURATION)
t = np.arange(N) / SR


def hz(midi):
    return 440.0 * 2 ** ((midi - 69) / 12)


def env_adsr(n, a, d, s, r_start, r):
    """Attack/decay/sustain, release beginning at r_start seconds; all in seconds."""
    tt = np.arange(n) / SR
    e = np.where(tt < a, tt / max(a, 1e-4), 1.0)
    e = np.where(tt >= a, s + (1 - s) * np.exp(-(tt - a) / max(d, 1e-4)), e)
    e = e * np.where(tt > r_start, np.exp(-(tt - r_start) / max(r, 1e-4)), 1.0)
    return e


def ensemble(midi, start, length, brightness, voices=6, amp=1.0):
    """Detuned unison 'strings': each voice has its own cents offset, vibrato and bow noise."""
    n = int(length * SR)
    tt = np.arange(n) / SR
    out = np.zeros(n)
    for v in range(voices):
        cents = rng.uniform(-9, 9)
        f = hz(midi) * 2 ** (cents / 1200)
        vib = 1 + .0025 * np.sin(2 * np.pi * rng.uniform(4.6, 5.6) * tt + rng.uniform(0, 6))
        phase = 2 * np.pi * np.cumsum(f * vib) / SR + rng.uniform(0, 6)
        b = brightness(tt + start) if callable(brightness) else brightness
        sig = np.zeros(n)
        for h in range(1, 9):  # saw-like partials, upper ones gated by brightness
            sig += np.sin(h * phase) / h * np.clip(b * 9 - h + 1, 0, 1)
        delay = int(rng.uniform(0, .03) * SR)
        sig = np.concatenate([np.zeros(delay), sig[:n - delay]])
        out += sig
    bow = sosfilt(butter(2, [1200, 4000], 'band', fs=SR, output='sos'), rng.standard_normal(n)) * .008
    return (out / voices + bow) * amp


def piano(midi, vel):
    """Felt piano: slightly inharmonic partials, faster decay up top, a soft hammer thump."""
    length = 2.2
    n = int(length * SR)
    tt = np.arange(n) / SR
    f0 = hz(midi)
    B = .0004
    sig = np.zeros(n)
    for k in range(1, 10):
        fk = k * f0 * np.sqrt(1 + B * k * k)
        if fk > SR / 2.2:
            break
        sig += np.sin(2 * np.pi * fk * tt) * np.exp(-tt * (1.6 + .9 * k)) / k ** 1.3
    thump = sosfilt(butter(2, 900, 'low', fs=SR, output='sos'), rng.standard_normal(n)) * np.exp(-tt * 60) * .25
    return (sig * np.minimum(tt / .004, 1) + thump) * vel


def sub(freq, vel, decay):
    n = int(1.5 * SR)
    tt = np.arange(n) / SR
    sweep = freq * (1 + .6 * np.exp(-tt * 40))  # tiny pitch drop gives it shape without a click
    return np.sin(2 * np.pi * np.cumsum(sweep) / SR) * np.exp(-tt / decay) * np.minimum(tt / .003, 1) * vel


def place(buf, sig, start):
    i = int(start * SR)
    j = min(len(buf), i + len(sig))
    if i < len(buf):
        buf[i:j] += sig[:j - i]


def reverb_ir(seconds=2.8):
    n = int(seconds * SR)
    tt = np.arange(n) / SR
    noise = rng.standard_normal((2, n))
    lo = sosfilt(butter(2, 1500, 'low', fs=SR, output='sos'), noise) * np.exp(-tt / .75)
    hi = sosfilt(butter(2, 1500, 'high', fs=SR, output='sos'), noise) * np.exp(-tt / .28)
    ir = lo + hi
    for d, g in [(.011, .5), (.019, .4), (.027, .32), (.041, .25)]:  # early reflections
        ir[:, int(d * SR)] += g
    return ir / np.abs(ir).sum(axis=1, keepdims=True) * 18


pad = np.zeros(N)
keys = np.zeros(N)
low = np.zeros(N)
air = np.zeros(N)

# Montage pad: D2 A2 D3, opening up as the cuts accelerate, dropping out at the cut to ink
bright = lambda x: np.clip(.15 + .85 * (x / MONTAGE_END) ** 1.5, 0, 1)
for m, a in [(38, .9), (45, .7), (50, .55)]:
    s = ensemble(m, 0, MONTAGE_END + .05, bright, amp=a)
    s *= np.minimum(np.arange(len(s)) / SR / .35, 1) * (.35 + .65 * np.arange(len(s)) / len(s))
    s[-int(.03 * SR):] *= np.linspace(1, 0, int(.03 * SR))
    place(pad, s, 0)

# A note on every cut, climbing through D major, louder as the cuts speed up
line = [62, 66, 69, 74, 69, 73, 76, 74, 78, 76, 81, 78, 86]
for k, (c, m) in enumerate(zip(CUTS, line)):
    place(keys, piano(m, .28 + .5 * k / len(line)), c)
    place(low, sub(49 if k % 2 == 0 else 55, .18 + .25 * k / len(line), .12), c)

# Cut to ink: a breath of air, then the bloom as the mark draws
n_air = int(.35 * SR)
tt_air = np.arange(n_air) / SR
air_sig = sosfilt(butter(2, [3000, 9000], 'band', fs=SR, output='sos'), rng.standard_normal(n_air))
place(air, air_sig * np.exp(-tt_air / .08) * .05, MONTAGE_END)

bloom_len = DURATION - MARK
fade = lambda s: s * env_adsr(len(s), .55, 1.2, .75, bloom_len - 1.4, .5)
for m, a in [(38, .85), (45, .7), (50, .6), (54, .45), (57, .4), (64, .3)]:  # D add9
    place(pad, fade(ensemble(m, MARK, bloom_len, .55, amp=a)), MARK)
for m, v in [(50, .45), (57, .4), (62, .45), (66, .38), (69, .35), (76, .3)]:
    place(keys, piano(m, v), MARK + .01 * (m % 5))
place(low, sub(36.7, .55, .9), MARK)  # D1 bloom under the logo

# Mix, reverb, EQ
dry = pad * .32 + keys * .55 + low * .9 + air
ir = reverb_ir()
wet = np.stack([fftconvolve(dry - low * .9, ir[c])[:N] for c in range(2)])
stereo = np.stack([dry, dry]) * .7 + wet * .45
stereo[0] += pad * .03  # slight width
stereo = sosfilt(butter(2, 28, 'high', fs=SR, output='sos'), stereo)
stereo = sosfilt(butter(2, 5500, 'low', fs=SR, output='sos'), stereo) * .8 + stereo * .2  # warm it; a little air left on top

# Gentle master fade so it lands with the picture's dissolve
tail = t > DURATION - .5
stereo[:, tail] *= np.linspace(1, 0, tail.sum()) ** 1.5
# Master to -14 LUFS (YouTube's reference), then hold true peak under -1.3 dBTP (4x oversampled check)
import pyloudnorm as pyln
from scipy.signal import resample_poly
stereo *= 10 ** ((-14 - pyln.Meter(SR).integrated_loudness(stereo.T)) / 20)
tp = np.abs(resample_poly(stereo, 4, 1, axis=1)).max()
ceiling = 10 ** (-1.3 / 20)
if tp > ceiling:  # soft-knee limit only the peaks
    stereo = np.tanh(stereo / ceiling * .98) * ceiling

here = os.path.dirname(os.path.abspath(__file__))
out = os.path.join(here, '..', '..', 'exports', 'youtube-bumper', 'bumper-score.wav')
sf.write(out, stereo.T, SR, subtype='PCM_24')

spec = np.abs(np.fft.rfft(stereo.mean(0)))
freqs = np.fft.rfftfreq(N, 1 / SR)
print('wrote', os.path.normpath(out))
print('spectral centroid %.0f Hz' % ((spec * freqs).sum() / spec.sum()))
print('loudness %.1f LUFS' % pyln.Meter(SR).integrated_loudness(stereo.T))
