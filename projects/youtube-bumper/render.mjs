// Renders bumper.html to an MP4, frame by frame.
// Needs Playwright (Chromium) and ffmpeg (set FFMPEG=/path/to/ffmpeg if it isn't on PATH).
// If exports/youtube-bumper/bumper-music.wav exists (python3 projects/youtube-bumper/music.py Symmetry.mp3),
// it is laid under the picture (music.py already masters it to -14 LUFS).
//   node projects/youtube-bumper/render.mjs
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const FPS = 30;
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const outDir = path.join(root, 'exports/youtube-bumper');
const out = path.join(outDir, 'journey-bumper-1920x1080.mp4');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(pathToFileURL(path.join(here, 'bumper.html')).href + '#seek');
await page.evaluate(() => window.__ready);
await page.evaluate(() => document.fonts.ready);
const duration = await page.evaluate(() => window.__duration);

const score = path.join(outDir, 'bumper-music.wav');
const audio = fs.existsSync(score)
  ? ['-i', score, '-map', '0:v', '-map', '1:a', '-ar', '48000', '-c:a', 'aac', '-b:a', '192k', '-shortest']
  : [];
const ff = spawn(process.env.FFMPEG || 'ffmpeg', [
  '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', ...audio,
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '16', '-preset', 'slow',
  '-movflags', '+faststart', out,
], { stdio: ['pipe', 'inherit', 'inherit'] });

const frames = Math.round(duration * FPS);
for (let f = 0; f < frames; f++) {
  await page.evaluate(t => window.__seek(t), (f + .5) / FPS); // mid-frame, so a cut lands on the frame nearest its beat
  const buf = await page.screenshot({ type: 'png' });
  if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
}
ff.stdin.end();
await new Promise(r => ff.on('close', r));

// Still of the settled lockup, for the card thumbnail and for review
await page.evaluate(t => window.__seek(t), duration - .8);
await page.screenshot({ path: path.join(outDir, 'journey-bumper-endcard-1920x1080.png') });
await browser.close();
console.log('Wrote', out);
