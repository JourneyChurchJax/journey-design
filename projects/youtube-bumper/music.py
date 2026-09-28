"""Cuts the bumper's music from "Symmetry" so its bass drop lands on the logo.

Beat grid measured from the track: 128.9 BPM (0.4655s a beat), drop on the downbeat at 83.098s.
The excerpt starts 8 beats earlier, so every photo cut in bumper.html sits on the kick.
Mastered to -14 LUFS with a 0.6s fade out under the picture's dissolve.

    pip install numpy soundfile pyloudnorm
    python3 projects/youtube-bumper/music.py /path/to/Symmetry.mp3
      -> exports/youtube-bumper/bumper-music.wav (+ .m4a for the live page, if ffmpeg is on PATH or FFMPEG is set)
"""
import os
import subprocess
import sys
import numpy as np
import soundfile as sf
import pyloudnorm as pyln

BEAT = 0.4655       # keep in step with BEAT in bumper.html
DROP = 83.098       # seconds into the track
MONTAGE_BEATS = 8
TAIL_BEATS = 6
FADE_OUT = 0.6

src = sys.argv[1]
start = DROP - MONTAGE_BEATS * BEAT
length = (MONTAGE_BEATS + TAIL_BEATS) * BEAT

info = sf.info(src)
sr = info.samplerate
y, _ = sf.read(src, start=int(round(start * sr)), frames=int(round(length * sr)), always_2d=True)

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

here = os.path.dirname(os.path.abspath(__file__))
out = os.path.normpath(os.path.join(here, '..', '..', 'exports', 'youtube-bumper', 'bumper-music.wav'))
sf.write(out, y, sr, subtype='PCM_24')
print('wrote', out, '%.3fs from %.3fs' % (length, start))

ffmpeg = os.environ.get('FFMPEG', 'ffmpeg')
try:
    subprocess.run([ffmpeg, '-loglevel', 'error', '-y', '-i', out, '-c:a', 'aac', '-b:a', '192k', out[:-4] + '.m4a'], check=True)
    print('wrote', out[:-4] + '.m4a')
except (OSError, subprocess.CalledProcessError):
    print('ffmpeg not found; skipped the .m4a for the live page')
