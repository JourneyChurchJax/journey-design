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
     "assets/logo/", "assets/js/", "assets/fonts/", "components/graphics/", "slides/", "projects/"])
# To see what exists, list the folders:
print(sorted({p.split("/")[0] + "/" + p.split("/")[1] for p in paths
              if p.startswith(("ministries/", "series/", "events/", "projects/", "Graphics/")) and p.count("/") >= 2}))
```

Then, once you know what the request is for, fetch its folders too, for example:

```python
get(["events/baptism/", "Graphics/Baptism/"])            # an event and its finished work
get(["ministries/good-work/", "Graphics/Good Work/"])     # a ministry
get(["assets/photo/"])                                    # Journey's own photos (use one whenever you can)
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
2. What size or format? (Feed square, portrait, story, stage screen, thumbnail, print.) For the stage, ask which screen: the side screens are 1920 × 1080. The size of the large center screen is not in the design system yet, so ask for its exact pixel size before you build for it.
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

These are a short copy of `brand.md` as of the October 2026 look. If they ever differ, `brand.md` wins.

## Voice: like a friend over coffee
- Write to one real person thinking about visiting, never "an audience." Use "you." The church is "we."
- Warm, clear, honest. Short and human over clever. Answer the practical question first (when, where, what happens), then say the meaningful thing.
- Say Jesus. Not "the divine" or "a higher purpose."
- Sentence case. Social graphics have no eyebrows. Labels on the website are UPPERCASE and letter-spaced.
- No exclamation points. No emoji. Ever.
- No dashes in copy. Rewrite the sentence instead.
- Times: `Sundays 9:00 & 11:00 AM`. Dates: `Sun Oct 12 · 6 PM`.
- Never use: blessed, anointed, season of, powerful, breakthrough, intercede, "pursue God's presence," "stand in unity," "come ready to respond," or "encounter" as filler.
- Test: if the sentence could come from any church email in the country, rewrite it.
- On a graphic: the headline says it in one human sentence, set big, and one word or short phrase in it is red. That is the emotional beat, never "the," "and" or "of." The red is the same weight as the rest, not italic.
- Never invent a statistic, quote, testimonial, name, date or Scripture reference.

## Color: white, cream, ink, one red
- Journey Red `#FF3A3A` is the only accent. One red thing per view: the red phrase, a red band or field, or a red hand-drawn mark each count as the one.
- White `#FFFFFF` (social bands and fields) · Cream `#F7F4F0` · Alt cream `#ECE7DF` · Border `#D8D1C5` · Muted on cream `#5A574F` · Muted on dark `#9A948A` · Ink `#0A0A0A` · Deepest `#050505`.
- Red text smaller than about 26px on cream uses `#9A1818`.
- Red can be a background only for buttons, pull-quotes, and on social the red band and red field. On a red ground the headline goes all white and the J goes white. On photos the red phrase stays red.
- The old red `#E31E26` is retired.

## Type: four faces, four jobs
- **Bricolage Grotesque 800**: headlines, titles, numbers. Tracking −0.04em, line-height 0.9. Set it big. The red accent is the same face and weight, not italic. (Inter Tight is retired except inside the Good Work logo.)
- **Inter 400**: body, logistics, captions, buttons.
- **Newsreader**: Scripture and pull-quotes only. Italic marks the beat there instead of red. Never a headline.
- **Archivo Expanded Black**: sermon series art and stage screens only.
All four are free on Google Fonts, and `tokens/fonts.css` loads them.

Minimum sizes. On a 1080 square: headline 86px (social headlines usually run 120 to 190px), body 34px, logistics label 22px, value 36px. On a 1920 stage screen: lyrics 100px, Scripture 80px, labels 30px. Bigger is better on social.

## Social layouts (pick in this order)
1. **No band:** the first choice when the photo has a calm, darker area for the type. Type sits on the photo over a dark scrim. `slides/social-square-photo.html`
2. **Big band:** when the photo is busy where the type goes, the type would cover a face, or there are three or more facts. Photo on top, band on the bottom third. White band by default, red for Sundays and big days, black for evenings. `slides/social-square-band-*.html`
3. **No photo:** red field for quotes and Scripture-adjacent truths (all white type), white field for simple announcements. `slides/social-square-field-*.html`

Never the same layout twice in a row, and change the band color from the last one.

Carousels (`slides/social-carousel-*.html`): thin progress dashes across the top with a count like `2 / 7`, a typed → on every slide but the last, a cover that says "Swipe →" circled by hand, and a red close with the heavy J and one next step.

What brings it to life: hand-drawn circles, underlines and arrows from `assets/hand/`; close-up photos of real things in our building; a cutout person from `assets/photo/cutouts/` breaking over the headline (`slides/social-cutout.html`); place markers like "Lake Gray Blvd · Jacksonville"; series markers like "A House Built for His Presence · Week 2". Scripture posts: Newsreader italic on white, a hand-drawn red underline, the reference and version, a real photo. `slides/social-scripture.html`

Avoid: eyebrows on social, glows, decorative gradients, emoji, stock icons, fake handwriting presented as real, and the same formula every post.

## Layout
- Generous space. The frame of a graphic, full-bleed photos and stage screens are square. Rounded cards with soft shadows may appear inside a graphic only when it shows an interface or an information card.
- No decorative gradients. A dark scrim is allowed only behind type on a photo.
- No icons. Arrows are typed (→). Write "When" and "Where" instead of calendar or clock icons.
- One ghost device per graphic, at most: a huge word or number from the post itself in Bricolage Grotesque 800 at 6 to 8% on white or cream, 10% on red, 12 to 16% white on dark or on a photo, bleeding off an edge.

## Sizes
- Feed square 1080 × 1080 (80px safe margin)
- Portrait feed / carousel 1080 × 1350 (80px)
- Story / Reel 1080 × 1920 (250px top and bottom, 80px sides)
- Stage side screens 1920 × 1080 (96px action safe, 120px title safe)
- Stage center screen: size not set in the design system yet. Ask for it.
- 4K wall 3840 × 2160
- YouTube thumbnail 1280 × 720

## Logo
- Use only the real PNG files from `assets/logo/`. Never redraw, retype, recolor, stretch or add effects.
- Horizontal is the default. Stacked for squares. Mark alone when the name is already written nearby.
- Social uses the heavy J: `mark-ink-heavy.png` on white, `mark-white-heavy.png` on red, black and photos, `mark-ember-heavy.png` only when nothing else on the post is red.
- No vector logo exists yet. Don't send anything larger than a flyer to print.
- If you can't place the real logo file, leave a labeled empty box where it goes.

## By kind of work
- **Ministry:** use that ministry's own logo and look. The Journey Church logo still appears, usually small and centered at the bottom.
  - Good Work (job placement): red circle handshake, "Good Work." in Newsreader Italic with a red period.
  - Journey Women: florals, "JOURNEY" in Montserrat Light wide-spaced, "women" in Style Script. Cream `#F8F1E7`, blush `#E7B3A6`, rust `#A8391A`.
  - Good Living Food Pantry: stacked GOOD / LIVING with an apple for the O. Figtree 800. Green `#2B5E2F`, apple `#6FAE3D`, brown `#9A6B3C`.
- **Series:** can have its own face, palette and imagery. Keep the white horizontal Journey logo in its corner and set Scripture in Newsreader.
- **Event:** house look unless it's a big event. The When / Where block is identical every time and sits directly above the logo.
- **Project** (like Arise & Build): a progress bar is the device. Every figure must come from a live, confirmed source.

## Photos
- Journey's own photos only, and use one whenever you can. No stock photos of people. No AI-generated people. AI-generated landscapes are allowed if you say so.
- Full natural color, a touch brighter: saturate 1.05, brightness 1.06, contrast 1.04. Never black and white by default, never duotone, color wash, blur or frame.
- Every photo in `assets/photo/` is cleared for use. Children need a parent's yes.

## Weekly sermon social kit
Story (1080 × 1920), Quote post, Message recap carousel (1080 × 1350), Reel, Thumbnail. Use our own photos wherever we can. Recap carousels never name the speaker. No logos or watermarks on Reels. Read Scripture references from the transcript, never from memory.
