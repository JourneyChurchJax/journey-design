"""Cuts the bumper's music from "Symmetry" so its bass drop lands on the logo.

Beat grid measured from the track: 128.9 BPM (0.4655s a beat), drop on the downbeat at 83.098s.
Slowed to 112 BPM with Rubber Band (tempo only, pitch unchanged; Adam: "a little too fast").
The excerpt starts 8 beats before the drop, so every photo cut in bumper.html sits on the kick.
Mastered to -14 LUFS with a 0.6s fade out under the picture's dissolve.

    pip install numpy soundfile pyloudnorm   (ffmpeg with the rubberband filter is required)
    python3 projects/youtube-bumper/music.py /path/to/Symmetry.mp3
      -> exports/youtube-bumper/bumper-music.wav (+ .m4a for the live page); set FFMPEG if ffmpeg isn't on PATH
"""
import os
import subprocess
import sys
import numpy as np
import soundfile as sf
import pyloudnorm as pyln

SRC_BEAT = 0.4655   # the track's own beat (128.9 BPM)
DROP = 83.098       # seconds into the track
TARGET_BPM = 112
RATE = 60 / TARGET_BPM / SRC_BEAT   # >1 means slower
BEAT = SRC_BEAT * RATE              # 0.5357s, keep in step with BEAT in bumper.html
MONTAGE_BEATS = 8
TAIL_BEATS = 6
FADE_OUT = 0.6

src = sys.argv[1]
ffmpeg = os.environ.get('FFMPEG', 'ffmpeg')
here = os.path.dirname(os.path.abspath(__file__))
out = os.path.normpath(os.path.join(here, '..', '..', 'exports', 'youtube-bumper', 'bumper-music.wav'))

# Pull the source span with a bar of padding either side, stretch it, then trim on the new grid
PAD = 4 * SRC_BEAT
src_start = DROP - MONTAGE_BEATS * SRC_BEAT - PAD
src_len = (MONTAGE_BEATS + TAIL_BEATS) * SRC_BEAT + 2 * PAD
sr = sf.info(src).samplerate
raw, _ = sf.read(src, start=int(round(src_start * sr)), frames=int(round(src_len * sr)), always_2d=True)
tmp_in, tmp_out = out + '.src.wav', out + '.slow.wav'
sf.write(tmp_in, raw, sr, subtype='FLOAT')
subprocess.run([ffmpeg, '-loglevel', 'error', '-y', '-i', tmp_in,
                '-af', f'rubberband=tempo={1 / RATE:.6f}:transients=crisp:detector=percussive:phase=independent',
                '-c:a', 'pcm_f32le', tmp_out], check=True)
slow, _ = sf.read(tmp_out, always_2d=True)
os.remove(tmp_in); os.remove(tmp_out)

start = PAD * RATE  # where the first montage beat now sits
length = (MONTAGE_BEATS + TAIL_BEATS) * BEAT
y = slow[int(round(start * sr)):int(round((start + length) * sr))].copy()

n_in = int(.005 * sr)  # 5ms, just to kill a click on the first kick
y[:n_in] *= np.linspace(0, 1, n_in)[:, None]
n_out = int(FADE_OUT * sr)
y[-n_out:] *= (np.linspace(1, 0, n_out) ** 2)[:, None]

meter = pyln.Meter(sr)
y *= 10 ** ((-14 - meter.integrated_loudness(y)) / 20)
peak = np.abs(y).max()
if peak > 10 ** (-1.3 / 20):
    y *= 10 ** (-1.3 / 20) / peak
    print('peak-limited; loudness now %.1f LUFS' % meter.integrated_loudness(y))

sf.write(out, y, sr, subtype='PCM_24')
print('wrote', out, '%.3fs at %d BPM' % (length, TARGET_BPM))

subprocess.run([ffmpeg, '-loglevel', 'error', '-y', '-i', out, '-c:a', 'aac', '-b:a', '192k', out[:-4] + '.m4a'], check=True)
print('wrote', out[:-4] + '.m4a')
