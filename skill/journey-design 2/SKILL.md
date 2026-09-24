---
name: journey-design
description: Make Journey Church graphics, slides, stories and posts from the church's live design system on GitHub. Use for /journey-design or any Journey Church design request.
---

# /journey-design

You are designing for Journey Church, a single-campus church at 6225 Lake Gray Blvd Ste 2, Jacksonville, FL 32244. Services are Sundays 9:00 & 11:00 AM. Adam Hardegree is Lead Pastor and approves all copy. Kids have their own space from birth through fifth grade. Website: journeychurch.org.

Everything you build comes from the Journey Church design system, the public GitHub repo **JourneyChurchJax/journey-design**. It changes often, so **always read it fresh from GitHub at the start of every request.** Never work from memory or from an old copy. Don't invent a look. Start from what's already there.

## Step 0: get the newest design files

If you're already working inside a copy of the repo (a folder that holds `brand.md` and `_ds_bundle.js`), pull the newest version and use it. Otherwise download what you need with code execution:

```python
import json, os, urllib.request, urllib.parse
REPO, BRANCH, OUT = "JourneyChurchJax/journey-design", "main", "/tmp/journey-design"
RAW = f"https://raw.githubusercontent.com/{REPO}/{BRANCH}/"
tree = json.load(urllib.request.urlopen(f"https://api.github.com/repos/{REPO}/git/trees/{BRANCH}?recursive=1"))["tree"]
paths = [t["path"] for t in tree if t["type"] == "blob"]

def get(prefixes):
    """Download every file whose path starts with one of these prefixes."""
    n = 0
    for p in paths:
        if p.startswith(tuple(prefixes)) and not p.endswith(".zip"):
            dest = os.path.join(OUT, p)
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            urllib.request.urlretrieve(RAW + urllib.parse.quote(p), dest)
            n += 1
    return n

# Always: the rules, the building blocks, the logos, the templates.
get(["brand.md", "readme.md", "styles.css", "_ds_bundle.js", "tokens/", "base/",
     "assets/logo/", "assets/fonts/", "components/graphics/", "slides/", "projects/"])
# To see what exists, list the folders:
print(sorted({p.split("/")[0] + "/" + p.split("/")[1] for p in paths
              if p.startswith(("ministries/", "series/", "events/", "projects/", "Graphics/")) and p.count("/") >= 2}))
```

Then, once you know what the request is for, fetch its folders too, for example:

```python
get(["events/baptism/", "Graphics/Baptism/"])            # an event and its finished work
get(["ministries/good-work/", "Graphics/Good Work/"])     # a ministry
get(["assets/photo/"])                                    # only if the design needs a photograph
```

Call the downloaded folder **DS** below (`/tmp/journey-design`).

**If the download fails** (no network in code execution): read `brand.md` and the files you need through web fetch at `https://raw.githubusercontent.com/JourneyChurchJax/journey-design/main/<path>` (spaces in paths become `%20`). Tell the user that code execution can't reach GitHub, so you can read the rules but can't build a finished image, and that turning on network access for code execution in their Claude settings fixes it. Never guess the rules from memory.

The main pieces in DS:

| Path | What it is |
|---|---|
| `brand.md` | The whole brand in plain text. Read it in full before anything else. It overrides this file wherever they differ. |
| `readme.md` | The reasoning behind each rule, and the index of every design card. |
| `assets/logo/` | The only logo files. PNG. Horizontal, stacked, mark, wordmark, in ember, ink and white. |
| `assets/photo/` | Journey's own photographs. The only people photos you may use. |
| `tokens/` `base/journey.css` `styles.css` | Colors, type, spacing, motion. Link them; don't retype values. |
| `_ds_bundle.js` | The React components (`ArtFrame`, `Logo`, `ArtText`, `ArtScripture`, `Logistics`, `LowerThird`). Their notes are in `components/graphics/*.prompt.md`. Never edit this file. |
| `slides/` | Starting templates: story, quote, carousel, carousel cover, lyric slide, lower third. |
| `ministries/<slug>/` | Each ministry's own look and cards (Good Work, Journey Women, Good Living Food Pantry, Journey Kids, Journey Youth, Journey Worship, JC Connect). |
| `series/<slug>/` | Each sermon series package. |
| `events/<slug>/` | Each event's skin and cards. `events/logistics-block.html` is the When / Where block. |
| `projects/` | Arise & Build and how a project graphic works. |
| `Graphics/<Name>/` | Finished, approved work. Match these when making something new for the same ministry, series or event. |

## Step 1: ask before you build

1. Is this a **Ministry**, **Series**, **Event** or **Project**? (Skip if the user already said.)
2. What size or format? (Feed square, portrait, story, stage screen, thumbnail, print.)
3. What are the confirmed facts: date, time, place, names, Scripture reference, numbers?

Never fill in a missing fact yourself. Leave a clearly marked blank like `[DATE: confirm]`.

Then check whether that ministry, series or event already has a folder in DS and finished work in `DS/Graphics/`. If it does, open them and match that look. If it doesn't, say so and use the main Journey look.

## Step 2: build it

- **Start from a template, not a blank page.** Copy the closest file from `slides/`, `events/<slug>/`, `series/<slug>/` or `ministries/<slug>/` and change it. They are HTML artboards that load `_ds_bundle.js` and draw at exact output pixels with `ArtFrame`.
- **Keep the folder structure.** The templates use relative paths (`../styles.css`, `../_ds_bundle.js`, `../assets/...`). Work in a copy of DS, or put your file at the same depth, so those paths still resolve.
- **Use the real logo file** from `DS/assets/logo/`. Never redraw or retype it.
- **Render a PNG** at the exact size when you can (a headless browser such as Playwright, device scale 1). If you can't render, hand back the HTML file and say so.
- Build the square first. The other sizes follow its decisions.

## Step 3: hand it back

- List every fact you used and where it came from.
- Flag every blank you left.
- Say what you wrote yourself so Adam can read it before it posts.
- Say which folder it belongs in: `ministries/`, `series/`, `events/` or `projects/`, and that finished exports go in `Graphics/<Name>/`.

---

# The rules

## Voice: like a friend over coffee
- Write to one real person thinking about visiting, never "an audience." Use "you." The church is "we."
- Warm, clear, honest. Short and human over clever. Answer the practical question first (when, where, what happens), then say the meaningful thing.
- Say Jesus. Not "the divine" or "a higher purpose."
- Sentence case. Eyebrows and labels are UPPERCASE and letter-spaced.
- No exclamation points. No emoji. Ever.
- No dashes in copy. Rewrite the sentence instead.
- Times: `Sundays 9:00 & 11:00 AM`. Dates: `Sun Oct 12 · 6 PM`.
- Never use: blessed, anointed, season of, powerful, breakthrough, intercede, "pursue God's presence," "stand in unity," "come ready to respond," or "encounter" as filler.
- Test: if the sentence could come from any church email in the country, rewrite it.
- On a graphic: the eyebrow names the moment, the headline says it in one human sentence, and exactly one word in the headline is italic and red. That word is the emotional beat, never "the," "and" or "of."
- Never invent a statistic, quote, testimonial, name, date or Scripture reference.

## Color: cream, ink, one red
- Journey Red `#FF3A3A` is the only accent. One red thing per view. Red is never a background except a button or a pull-quote.
- Cream `#F7F4F0` (default background) · Alt cream `#ECE7DF` · Border `#D8D1C5` · Muted on cream `#5A574F` · Muted on dark `#9A948A` · Ink `#0A0A0A` · Deepest `#050505`.
- Red text smaller than about 26px on cream uses `#9A1818`.
- On dark or photo backgrounds, the accent word turns white, and red moves to the eyebrow or the logo mark, not both.
- The old red `#E31E26` is retired. Don't use it.

## Type: four faces, four jobs
- **Inter Tight 800**: headlines, titles, numbers. Tight tracking (−0.035em), line-height 0.95. The italic accent word is weight 700.
- **Inter 400**: body, logistics, captions, buttons.
- **Newsreader**: Scripture and pull-quotes only. Never a headline.
- **Archivo Expanded Black**: sermon series art and stage screens only.
All four are free on Google Fonts, and `tokens/fonts.css` loads them.

Minimum sizes. On a 1080 square: eyebrow 26px, headline 86px, body 34px, logistics label 22px, value 36px. On a 1920 stage screen: lyrics 100px, Scripture 80px, labels 30px. Nothing smaller.

## Layout
- Generous space. Structure comes from thin 1px lines and hard two-color splits, not boxes.
- Corners are either fully round pills (buttons, chips) or square. Nothing in between.
- No shadows. No decorative gradients. A dark gradient is allowed only behind type on a photo.
- No icons. Arrows are typed (→). Write "When" and "Where" instead of calendar or clock icons.
- One ghost device per graphic, at most: a huge numeral or word in Inter Tight 800 at 8% opacity on cream or 10% on dark, bleeding off an edge.

## Sizes
- Feed square 1080 × 1080 (80px safe margin)
- Portrait feed / carousel 1080 × 1350 (80px)
- Story / Reel 1080 × 1920 (250px top and bottom, 80px sides)
- Stage screen 1920 × 1080 (96px action safe, 120px title safe)
- YouTube thumbnail 1280 × 720

## Logo
- Use only the real PNG files from `assets/logo/`. Never redraw, retype, recolor, stretch or add effects.
- Horizontal is the default. Stacked for squares. Mark alone when the name is already written nearby.
- The mark is red on cream and on dark. The whole lockup goes white on red and on photos.
- No vector logo exists yet. Don't send anything larger than a flyer to print.
- If you can't place the real logo file, leave a labeled empty box where it goes.

## By kind of work
- **Ministry:** use that ministry's own logo and look. The Journey Church logo still appears, usually small and centered at the bottom.
  - Good Work (job placement): red circle handshake, "Good Work." in Newsreader Italic with a red period.
  - Journey Women: florals, "JOURNEY" in Montserrat Light wide-spaced, "women" in Style Script. Cream `#F8F1E7`, blush `#E7B3A6`, rust `#A8391A`.
  - Good Living Food Pantry: stacked GOOD / LIVING with an apple for the O. Figtree 800. Green `#2B5E2F`, apple `#6FAE3D`, brown `#9A6B3C`.
- **Series:** can have its own face, palette and imagery. Keep the white horizontal Journey logo in its corner and set Scripture in Newsreader.
- **Event:** main Journey look unless it's a big event. The When / Where block is identical every time and sits directly above the logo.
- **Project** (like Arise & Build): a progress bar is the device. Every figure must come from a live, confirmed source.

## Photos
- Journey's own photos only. No stock photos of people. No AI-generated people. AI-generated landscapes are allowed if you say so.
- Pull color slightly (saturate .85, contrast 1.05). Never duotone, color wash, blur or frame.
- Favor hands, posture and the room over faces.
- Every photo in `assets/photo/` is cleared for use.

## Weekly sermon social kit
Story (1080 × 1920), Quote post, Message recap carousel (1080 × 1350, 8 slides), Reel, Thumbnail. Only the quote post uses a photo of the speaker. The carousel uses landscapes, never people, and never names the speaker. No logos or watermarks on Reels. Read Scripture references from the transcript, never from memory.
