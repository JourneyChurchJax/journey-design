# Journey Church — Brand Guide

> Plain-text brand guide for Journey Church (Jacksonville, FL), written for people and AI assistants. Read this whole file before writing copy or designing anything for Journey. The visual version of every design lives at /brand/. All links below are relative to this site.

## Quick facts
- **Church:** Journey Church · 6225 Lake Gray Blvd Ste 2, Jacksonville, FL 32244
- **Services:** Sundays 9:00 & 11:00 AM
- **Lead Pastor:** Adam Hardegree (owns all copy — have him approve before anything posts)
- **Kids:** their own space from birth through fifth grade
- **Website:** journeychurch.org
- **Current sermon series:** *A House Built for His Presence* · **Current building campaign:** *Arise & Build*

## How to use this guide
1. Follow the rules in Voice, Color, Type and Layout for anything in the main Journey look.
2. Ministries, sermon series and big events can have their own look — check the Design catalog below for that group first and match it.
3. Use the real logo files linked below. Never redraw or retype the logo.
4. Never invent a date, time, number, quote, Scripture reference or name. If it isn't confirmed, leave a clearly marked blank.

---

## Voice
**Like a friend over coffee.** Write to one real person considering a visit, never "an audience." Second person; the church is "we."

- Warm, clear, honest. Short and human over clever. On graphics, pages and emails, answer the practical question first (time, place, what happens), then say the meaningful thing. Stage and announcements go the other way: one story, one next step, with the details in the app (see Communication levels).
- This is the church's voice, not Adam's personal writing voice. Full voice rules: Who we are and voice, below.
- **Say Jesus.** Not "the divine" or "a higher purpose."
- Sentence case everywhere. Labels on the website are UPPERCASE and tracked. Social graphics have no eyebrows (Oct 2026).
- **No exclamation points. No emoji.** Hard rules.
- Service times use an ampersand: `Sundays 9:00 & 11:00 AM`. Dates on graphics read `Sun Oct 12 · 6 PM` (middle dot separates label and value); lists and The Weekly use `Sun Feb 14 · 9:00 AM`. Time ranges take a plain hyphen (10:00 AM-12:00 PM), the one allowed dash.
- Words we don't use: blessed, anointed, season of, powerful, breakthrough, intercede, "pursue God's presence," "stand in unity," "come ready to respond," and "encounter" as filler.
- **The test:** if the sentence could be lifted from any church email in the country, rewrite it.
- On a graphic: the headline says it in one human sentence, set big, and one word or short phrase in it is red. That is the emotional beat, never "the," "and" or "of." The red is the same weight as the rest, not italic (Oct 2026).

## Color
Cream, white, ink, and **one** red.

| Name | Hex | Use |
|---|---|---|
| Journey Red (ember) | #FF3A3A | The only accent. One red thing per view. |
| Red hover | #E62D2D | Hover only |
| Small red text | #9A1818 | Red text under ~26px on cream (accessibility) |
| Cream | #F7F4F0 | Default page background; text on dark |
| White | #FFFFFF | The clean ground for social bands and white fields (Oct 2026) |
| Alt cream | #ECE7DF | Alternate fields, boxes |
| Border | #D8D1C5 | 1px hairlines |
| Muted on dark | #9A948A | |
| Muted on cream | #5A574F | |
| Warm gray | #2A2824 | Nav links |
| Ink | #0A0A0A | Body text, dark background |
| Deepest | #050505 | |

Print red: C0 M85 Y75 K0. Red is a background only for buttons, pull-quotes, and on social the red band and the red field. One red thing per view still holds: the red phrase in a headline counts, a red band or field counts, a red hand-drawn mark counts. When the ground is already red, the headline goes all white and the J goes white. On photos the red phrase stays red. The old red #E31E26 is retired.

**Full specs and pairings** (checked by script against `tokens/colors.css`, 17 Nov 2026): `guidelines/color-specs.html` has HEX, RGB, CMYK and one job for every color; `guidelines/color-pairings.html` shows each text and background pair with its contrast ratio. CMYK for every color but the red is a straight conversion, so get a printer's proof. No Pantone is confirmed.

| Text on ground | Ratio | Verdict |
|---|---|---|
| Ink on white / cream | 19.8 / 18.1 | Any size |
| Warm gray on cream | 13.4 | Any size |
| Muted on cream (#5A574F) on cream / white | 6.6 / 7.2 | Any size |
| Small red (#9A1818) on cream / white | 7.6 / 8.3 | Any size |
| Cream on ink; muted on dark (#9A948A) on ink | 18.1 / 6.6 | Any size |
| Journey Red on white / cream; white on red | 3.6 / 3.2 / 3.6 | Big type only (24px+, or 19px bold) |
| Muted on dark on cream; border color on anything | 2.8 / 1.5 | Never for text |

The brand rule wins over the math: on a red ground, type goes white even though ink measures higher.

## Type
Four typefaces, four jobs. All free on Google Fonts.
- **Bricolage Grotesque 800** (Oct 2026): headlines, titles, numbers. Tracking −0.04em, line-height 0.9. The red accent is the same face and weight, not italic. Set it big: friendly, bright, energetic. It replaced Inter Tight, which now stays only inside the Good Work logo.
- **Inter 400** — body, logistics, captions, buttons. Line-height 1.7.
- **Newsreader** — Scripture and pull-quotes only (main brand). Italic marks the beat instead of red.
- **Archivo Expanded Black** (width 125, weight 900) — sermon series art and stage screens only.

Eyebrows (website only): 0.78rem, 0.22em tracking, 600, uppercase. Labels: 0.72rem, 0.18em, 600, uppercase.

**Minimum sizes on graphics (floors):** 1080 square: headline 86px (social headlines usually run 120 to 190px), body 34px, logistics label 22px / value 36px. 1920 stage screen: lyrics 100px, Scripture 80px, labels 30px. Bigger is better on social.

## Layout
- Flex/grid with gaps. Generous space. The feel is Apple and Airbnb in Journey's colors: lots of air, soft rounded shapes, cards that lift slightly off the page, one obvious next step.
- **Surfaces:** cream page (`#F7F4F0`), raised card (`#FBF9F6`, always with a shadow), sunken ground for grouped lists and fields (`#ECE7DF`). Dark sections stay punctuation.
- **Corners (Oct 2026):** a fixed scale — `--radius-xs` 6 (tags), `--radius-sm` 10 (inputs, segmented controls), `--radius-md` 14 (grouped lists, small cards), `--radius-lg` 20 (cards, tiles, photos in UI), `--radius-xl` 28 (hero media, galleries, sheets), `--radius-pill` 999 (buttons, chips, search, avatars, bars). Square only for full-bleed photos, edge-to-edge sections and the frame of a graphic or stage screen. Nested corners step down one size.
- **Shadows (Oct 2026):** soft and warm, only from the `--shadow-*` tokens. `md` is the default card, `lg` for hover, popovers and a sticky action panel, `sm` for the search bar and chips, `xs` under resting buttons, `xl` only for a sheet over a scrim. A card gets a shadow or a 1px hairline, never both. No shadow on text, the logo, a bare photo or a dark section.
- **Interface patterns:** frosted sticky nav (cream at 82% with a 20px blur and a hairline), pill search bar, listing-style tiles (rounded media, plain facts underneath), a sticky booking-style action panel, grouped lists with inset separators and a typed `›`, segmented controls, bento tiles for personal dashboards.
- **Motion additions:** a card lifts 2px on hover (shadow md → lg, 0.25s); a button settles to 0.98 scale on press; sheets rise from the bottom. Nothing bounces or spins.
- **On graphics:** rounded cards and soft shadows may appear inside a graphic when it shows an interface or an information card. The frame of the graphic, full-bleed photos and stage screens stay square.
- **No decorative gradients.** Gradients only as dark scrims to protect type on photos.
- Textures: fine dot grain on large dark fields, or fine ink dots on large cream fields — never both, never on a photo.
- **Ghost device:** one per graphic: a huge word or number taken from the post itself (the day, the date, the verse) in Bricolage Grotesque 800 at 6 to 8% on white or cream, 10% on red, 12 to 16% white on dark or on a photo, bleeding off an edge.
- **No icon set.** Arrows are typographic (→). Labels ("When," "Where") instead of calendar or clock icons.
- Photos: Journey's own only, never stock people. Use one whenever you can. Full natural color, a touch brighter: `saturate(1.05) brightness(1.06) contrast(1.04)` (Oct 2026). Never black and white by default, never duotone, color wash, blur or frame. Faces only of consenting stage team and staff; no identifiable child without a parent's signed release (Nov 2026, see Photos).
- Motion: one easing curve cubic-bezier(.2,.7,.2,1), slow and few. Nothing bounces, scales or spins.

## Graphic sizes
| Format | Size | Safe area |
|---|---|---|
| Feed square | 1080 × 1080 | 80px |
| Portrait feed / carousel | 1080 × 1350 | 80px |
| Story / Reel | 1080 × 1920 | 250px top & bottom, 80px sides |
| Stage side screens | 1920 × 1080 | 96px action, 120px title |
| Stage center screen | 3840 × 2160 | Broken by side panels: keep words and faces off the breaks. Break positions: [to confirm] |
| YouTube thumbnail | 1280 × 720 | Keep words out of the bottom right (video length) |
| TikTok | 1080 × 1920 | Same as story. No logo |
| Google Business Profile | 1200 × 900 | 80px |
| Invite card (print) | 3.5 × 2 in · 1125 × 675 at 300 dpi with 1/8 in bleed | 1/8 in inside the trim. Export CMYK |

The main feed size is portrait 1080 × 1350; build it first and the other sizes follow its decisions. Every size has a template in `slides/`: social-*.html, `thumbnail.html`, `stage-title.html`, `stage-center.html`, `lyric-slide.html`, `lower-third-slide.html`, `print-card.html`. The Journey Church logo sits in its locked corner (or centered at the bottom on ministry slides).

## Logo — Journey Church
PNG only (no vector exists yet, so nothing larger than a flier should be printed until one does). Horizontal is the default; stacked for squares; mark alone when the name is already written. The mark is red on cream and on dark; the whole lockup reverses (white) on red and on photos.

**Heavy J (Oct 2026, interim):** social graphics use a heavier mark, made by thickening the existing PNG: `mark-ember-heavy.png`, `mark-ink-heavy.png`, `mark-white-heavy.png`. Ink on white, white on red, black and photos, red only when nothing else on the post is red. Have a designer redraw it as a vector before it is printed or used large; the hook of the J tightens at this weight.

- [horizontal-ember.png](/brand/assets/logo/horizontal-ember.png)
- [horizontal-ember_cream.png](/brand/assets/logo/horizontal-ember_cream.png)
- [horizontal-ember_ink.png](/brand/assets/logo/horizontal-ember_ink.png)
- [horizontal-ink.png](/brand/assets/logo/horizontal-ink.png)
- [horizontal-white.png](/brand/assets/logo/horizontal-white.png)
- [mark-ember.png](/brand/assets/logo/mark-ember.png)
- [mark-ink.png](/brand/assets/logo/mark-ink.png)
- [mark-white.png](/brand/assets/logo/mark-white.png)
- [stacked-ember.png](/brand/assets/logo/stacked-ember.png)
- [stacked-ember_cream.png](/brand/assets/logo/stacked-ember_cream.png)
- [stacked-ember_ink.png](/brand/assets/logo/stacked-ember_ink.png)
- [stacked-ink.png](/brand/assets/logo/stacked-ink.png)
- [stacked-white.png](/brand/assets/logo/stacked-white.png)
- [wordmark-cream.png](/brand/assets/logo/wordmark-cream.png)
- [wordmark-ember.png](/brand/assets/logo/wordmark-ember.png)
- [wordmark-ink.png](/brand/assets/logo/wordmark-ink.png)

**Clear space.** X = the height of the J circle in the logo you are using. Keep X clear on every side: no type, edge, photo detail or other logo inside it. On social the locked corner already gives more than X.

**Smallest sizes** (below these the logo breaks up; use the next simpler lockup instead):

| Lockup | Screen | Print |
|---|---|---|
| Horizontal | 120 px wide | 1.25 in wide |
| Stacked | 80 px wide | 0.75 in wide |
| Wordmark | 120 px wide | 1.25 in wide |
| Mark (J alone) | 24 px | 0.25 in |
| Heavy J | 32 px | not for print |

**Never** (shown in `guidelines/brand-logo-misuse.html`): stretch or squash it, rotate it, add a shadow or glow, recolor it, put the red mark on a busy photo, put the ink logo on dark, crowd it inside its clear space, retype it in another font, put a gradient behind it, or use it below its smallest size.

**Profile photos, avatars and favicons** (`assets/logo/digital/`):
- Church profile photo, every platform: `profile-red-1080.png` (white heavy J on red, J at 50% of the height so the circle crop never clips it). `profile-white-1080.png` where red clashes with the platform.
- Website tab: `favicon.ico` (16, 32, 48) and `favicon-32.png` / `favicon-48.png` / `favicon-512.png` (red heavy J, transparent).
- Phone home screen: `apple-touch-icon-180.png` (red J on white).
- Ministry accounts use their own ministry logo as the profile photo, not the J.

**Contact lockups** (`assets/logo/digital/contact-horizontal-ink.png`, `contact-stacked-ink.png`): the horizontal logo, a hairline, then `6225 Lake Gray Blvd Ste 2 / Jacksonville, FL 32244 / journeychurch.org` in Inter. For letterhead, email signatures and print footers. Address and website only: no phone number or social handles (Adam, 17 Nov 2026).

**More logo rules (Brand Lessons, Nov 2026):** the logo always runs at 100% opacity, never as a watermark. One-color print uses the ink logo, never a gray tint. Pantone only if a printer asks. On social the heavy J sits in its locked bottom-right corner. Email font fallbacks: Bricolage Grotesque to a heavy system sans, Inter to the system sans, Newsreader to Georgia. Dot grain only on large dark or cream fields, never on a photo. Merch waits for the vector logo (mark on the left chest, art on the back, the J alone on tiny items). People on camera: waist-up framing, captions, `lower-third-slide.html`, releases on file.

**No vector logo exists yet.** Everything above is PNG. Nothing larger than a flyer goes to print, and no sign, shirt or banner is made, until a designer redraws the logo as a vector.

## Kinds of work
- **Sermon series** — each series gets its own look (face, palette, imagery). Only the contract holds: the reversed horizontal Journey logo in its corner, and Scripture in Newsreader. Package: 1920 title, square, story, lower third, weekly sermon title and Scripture boards.
- **Events** — stay in the house look; only big events borrow a custom skin. The logistics block (When / Where / etc.) is set the same every time, directly above the logo.
- **Projects** — run for months and carry a number (e.g. *Arise & Build*). The progress meter is the device; figures come from a live source.
- **Ministries** — each ministry has its own logo and look (see catalog). Journey Church's logo still appears on ministry graphics, usually small, centered at the bottom. A ministry's own social account uses its own logo as its profile, not the J. A ministry without a logo uses the J plus the ministry name in Bricolage Grotesque 800. JC Connect has its own logo (see catalog).
- **Weekly social kit (the sermon week, 8 pieces):** Sun story, Mon quote post, Tue clip 1, Wed recap carousel, Thu clip 2 with keyword reply, Fri full sermon on YouTube (plus thumbnail) and photo post 1, Sat photo post 2, optional blog. Details in Social engine and safeguarding. Use our own photos wherever we can. Only the quote post shows the speaker; recap carousels never name the speaker. No logos or watermarks on Reels. Generated landscapes are OK; generated people are not.

## Social (Oct 2026)
The look approved by Adam on Oct 2, 2026. Our photos in full color, Bricolage Grotesque set big, one red phrase, a faint ghost word, the heavy J. Templates in `slides/` (`social.css` holds the shared styles).

**Pick the layout in this order.**
1. **No band.** First choice whenever the photo has a calm, darker area for the type (sky, background, shadow). Headline, facts and the J sit right on the photo over a dark scrim. `slides/social-square-photo.html`
2. **Big band.** When the photo is busy where the type would go, the type would cover a face, or there are three or more facts. The photo takes the top, a band takes the bottom third, and the facts in the band are set as big as a headline. White is the default band, red for Sundays and big days, black for evenings. `slides/social-square-band-white.html`, `-red.html`, `-black.html`, `social-quote.html`, `social-story.html`
3. **No photo.** Red field for quotes and Scripture-adjacent truths (all white type), white field for simple announcements. `slides/social-square-field-red.html`, `-white.html`

**Rotate.** Never the same layout twice in a row, and when a band is used, change its color from the last one.

**Carousels.** `slides/social-carousel-*.html`
- Progress dashes across the top: one thin pill per slide, filled up to the current slide (red on white slides, white on photo and red slides), with a count like `2 / 7` in the top right.
- A typed arrow (→, never an icon) on the right edge of every slide except the last. The cover says **Swipe →**, circled by hand.
- Something crosses the slide edge: a photo, a big word, or the red marker line that runs along the bottom and stops at the close.
- Rhythm: photo cover with a big headline, then teaching slides alternating photo and white or red fields, then a red close with the heavy J and what to do next. Sermon recaps close with "Save this" or "Send this to a friend"; promos close with the app step ("Details in the Journey app").

**What brings it to life (and keeps it from looking generated).**
- **Handwriting.** Hand-drawn circles, underlines and arrows in marker, from `assets/hand/`. Written words come only from Adam's real handwriting, scanned; until then, a stand-in pen font marked as a stand-in.
- **Real objects.** Close-up photos of real things in our building (a Bible being written in, the lobby sign, the coffee bar, Journey Kids drawings), used as the photo.
- **Person in front of the words.** The cutout from `assets/photo/cutouts/` sits over the headline, so a head or raised hands break out of the photo over the red word. Keep the words readable: only the bottom of the word gets covered. `slides/social-cutout.html`
- **Place markers.** Small marks like "Lake Gray Blvd · Jacksonville".
- **Series markers.** "A House Built for His Presence · Week 2", same spot every week. Only state the total weeks when it is confirmed.
- **Motion.** For Reels and stories: the ghost word drifts slowly, the headline rises in, the red words arrive last, then the facts. One curve, about 3 seconds to land, nothing bounces or spins.
- **Scripture look.** Newsreader italic on white, a hand-drawn red underline under the key phrase, the reference and version, and a real photo underneath. `slides/social-scripture.html`

**Avoid:** eyebrows on social, glows, decorative gradients, emoji, stock icons, fake handwriting presented as real, and the same formula every post.

## Motion and loops (Nov 2026)
One curve, `cubic-bezier(.2,.7,.2,1)`. Slow and few. Nothing bounces, scales up or spins.
- **How a Reel or story opens:** the first frame is already a finished graphic (photo, headline, J), so a paused or thumbnailed Reel still reads. Never open on a black frame, a logo sting or a countdown.
- **The build, about 3 seconds:** the ghost word is already drifting (about 40px over the clip); the headline rises 22px and fades in over 1s; the red phrase arrives last, 0.3s after; then the facts, 0.09s apart. Then hold at least 2 seconds per line.
- **Slow motion:** real footage may run at 50% for one moment of worship or a baptism per clip. Never ramped, never a zoom punch. Type never moves in slow motion.
- **Logo:** none on Reels. On a story the heavy J sits still in its corner from the first frame.
- **Loops repeat without a jump:** last frame equals first frame (a there-and-back, or a drift that wraps one tile). 6 to 12 seconds; stage background loops 20 seconds or more. Only the ghost word, a slow photo drift or light in the footage moves; words never loop. MP4, no audio; play it three times in a row before handing it off.
- **Stage:** cuts and half-second dissolves; lower thirds slide in from the left over 0.6s; lyrics cut, never fade word by word; background loops sit under a scrim dark enough for 4.5:1 lyrics.

## Check before handoff
Run this on every graphic, slide, card and video before it goes to Adam. Any "no" means fix it first.
1. **One red thing.** The red phrase, or a red band or field, or a red hand mark. On a red ground the headline and J are white.
2. **Type floors.** 1080 graphic: headline 86px+ (usually 120 to 190), body 34px, logistics 36px value / 22px label. Stage: lyrics 100, Scripture 80, labels 30; double them on the 3840 center screen. Nothing past the safe area.
3. **Real logo.** A shipped PNG, never redrawn or retyped. Heavy J on social in its bottom-right spot, right color for the ground. None on Reels.
4. **Banned words.** None of the list in Voice.
5. **No dashes, no exclamation points, no emoji.** No em or en dashes in copy. Sentence case. No eyebrows on social.
6. **Confirmed facts.** Every date, time, place, name, number and Scripture reference checked against a live source or confirmed by Adam. Otherwise a visible [to confirm].
7. **Our own photo,** full color, with consent. No stock or AI people.
8. **Rotation.** Not the same layout or band color as the last post.
9. **Real size.** Exported at the exact pixels for its format, checked at phone-thumbnail size.

## Ministry logos (download)
- **Good Work — Job Placement Ministry:** red circle handshake + "Good Work." in Newsreader Italic 500 with a red period; subtitle "JOB PLACEMENT MINISTRY" in Inter Tight 600 tracked 0.3em. Colors: Journey Red, Ink, Cream, Warm Gray. Brand sheet: [/brand/ministries/good-work/brand.html](/brand/ministries/good-work/brand.html)
- **Journey Women:** florals + "JOURNEY" (Montserrat Light, wide tracked) + "women" (Style Script). Cream #F8F1E7, blush border #E7B3A6, rust accent #A8391A.
- **Good Living Food Pantry:** stacked GOOD / LIVING with an apple O, "FOOD PANTRY" in brown. Figtree 800; green #2B5E2F, apple #6FAE3D, brown #9A6B3C.

- [good-work/good-work-logo-horizontal-cream.png](/brand/exports/good-work/good-work-logo-horizontal-cream.png)
- [good-work/good-work-logo-horizontal-black.png](/brand/exports/good-work/good-work-logo-horizontal-black.png)
- [good-work/good-work-logo-horizontal-transparent-ink.png](/brand/exports/good-work/good-work-logo-horizontal-transparent-ink.png)
- [good-work/good-work-logo-horizontal-transparent-white.png](/brand/exports/good-work/good-work-logo-horizontal-transparent-white.png)
- [good-work/good-work-logo-stacked-cream.png](/brand/exports/good-work/good-work-logo-stacked-cream.png)
- [good-work/good-work-logo-stacked-black.png](/brand/exports/good-work/good-work-logo-stacked-black.png)
- [good-work/good-work-icon-red-transparent.png](/brand/exports/good-work/good-work-icon-red-transparent.png)
- [good-work/good-work-icon-black-transparent.png](/brand/exports/good-work/good-work-icon-black-transparent.png)
- [good-work/good-work-profile-photo-1080.png](/brand/exports/good-work/good-work-profile-photo-1080.png)
- [journey-women/journey-women-logo.png](/brand/exports/journey-women/journey-women-logo.png)
- [good-living/good-living-food-pantry-logo.png](/brand/exports/good-living/good-living-food-pantry-logo.png)
- [good-living/good-living-food-pantry-logo-transparent.png](/brand/exports/good-living/good-living-food-pantry-logo-transparent.png)

## Photos
**What we show (Adam, 17 Nov 2026):** hands, posture and the room. Show the room, not the band. Faces only of stage team and staff who have said yes. Photos in `assets/photo/sunday/` are already public, but any photo tagged `faces` and any baptism still gets a consent check before a promo uses it. Never the same photo twice on one page or post. Shoot through the crowd; edit honestly (no removing or adding people). No identifiable child without a parent's signed release: show kids as the space, the toys, small hands, the backs of heads. When in doubt, crop to hands or shoot from behind.

**Shot list for a Sunday** (one photographer, both vertical and horizontal of every shot; expect one keeper in five):

| Stop | Shots | What to get at Journey |
|---|---|---|
| Worship practice | 100 to 200 | Hands on instruments, the team from behind with the room, the cross lit, wide from the back aisle (the anchor shot) |
| Greeters | 50 | Doors opening, handshakes and hugs as hands, coffee being poured |
| Lobby | 50 | Name tags, the connect table, people talking (backs and hands), the kids check-in area empty |
| Sanctuary in service | 50 | Raised hands from behind, someone kneeling, the room under the cross, communion plates and hands |
| Campus | 50 | the sign on Lake Gray Blvd, the building at golden hour, people walking in |
| Detail | 40 | Bibles open, coffee cups, the kids room toys, a hand on a shoulder, chairs before people arrive |

**iPhone setup** (native Camera): Settings › Camera › Formats › ProRAW & Resolution Control on, ProRAW Max 48 MP (about 75 MB a shot, so clear 25 to 33 GB first). Preserve Settings all on except Action Mode. Grid and Level on. Live Photos off. In the app: RAW MAX badge on, exposure -1.0 (protects the stage lights), optical lenses only (0.5x, 1x, 5x; never pinch to zoom).

**Edit in three stages** (Lightroom):
1. **Preset first:** apply `assets/photo/preset/Journey 2026.xmp` (it already holds Texture -10, Clarity -20, Dehaze +6 and the +0.70 exposure that undoes the -1.0). Applying a preset after your own edits overwrites them, so preset first, always.
2. **Fix the photo:** crop and straighten, set white balance (skin looks real, not orange from stage light), then adjust exposure by eye. Highlights down if the stage blows out, shadows up if the room goes black.
3. **Finish:** check the vignette (-8 in the preset), sharpening (60, masking 85), profile corrections on, Lens Blur or masks only on a consenting face that needs to pop. Look at it once on a phone before export.

**Journey 2026 preset:** built for our brighter, full natural color look. Whites reach true white and blacks lift only a hair. Don't use the Pro Church Tools presets; they cap the whites at 229, 205 or 196 and make our room look gray. Before and after on ten of our photos: `guidelines/photo-preset.html` (a simulation on finished JPEGs; the real preset on RAW files will look a little different, so check one shoot in Lightroom).

**Filing:** one folder per shoot named `YYYY-MM-DD Sunday`, a `Keepers` folder inside it. Tag keepers by stop (worship, greeters, lobby, sanctuary, campus, detail), by shape (vertical, horizontal) and `faces` if anyone is recognizable. Web copies (2000 px) go to `assets/photo/`; full-size originals go in Journey Command.

**Shoots:** a full shoot each quarter, plus big days and baptism Sundays.

**Safeguarding in every photo:** no name tags, lanyards, check-in stickers, school names or shirts (crop or blur); strip GPS location from files; never show a home or a school. Full rules: Social engine and safeguarding.

**Release forms:** stage team and staff sign a media release (recommended: once a year, at the start of the ministry year; Adam to confirm). Any child who could be recognized needs a parent's signed release on file before the photo is used anywhere.

### Photo library
- [adam-stage-pointing.jpg](/brand/assets/photo/adam-stage-pointing.jpg)
- [baptism-woman-water-01.webp](/brand/assets/photo/baptism-woman-water-01.webp)
- [bowed-at-the-stage.jpg](/brand/assets/photo/bowed-at-the-stage.jpg)
- [congregation-hands-raised.jpg](/brand/assets/photo/congregation-hands-raised.jpg)
- [hands-open-dark.jpg](/brand/assets/photo/hands-open-dark.jpg)
- [kneeling-by-the-chairs.jpg](/brand/assets/photo/kneeling-by-the-chairs.jpg)
- [man-kneeling-praying.jpg](/brand/assets/photo/man-kneeling-praying.jpg)
- [praying-in-the-crowd.jpg](/brand/assets/photo/praying-in-the-crowd.jpg)
- [student-praying.jpg](/brand/assets/photo/student-praying.jpg)
- [two-bowed-together.jpg](/brand/assets/photo/two-bowed-together.jpg)

Sunday service, April 26, 2026 (2000 px web copy; the full-size original is in Journey Command):
- [baptism-student-smiling.jpg](/brand/assets/photo/baptism-student-smiling.jpg)

Wednesday service, August 26, 2026 (2000 px web copy; the full-size original is in Journey Command):
- [students-clapping-in-worship.jpg](/brand/assets/photo/students-clapping-in-worship.jpg)

Sunday service, September 20, 2026 (2000 px web copies; the full-size originals are in Journey Command):
- [baptism-arms-raised.jpg](/brand/assets/photo/baptism-arms-raised.jpg)
- [dancing-by-the-cross.jpg](/brand/assets/photo/dancing-by-the-cross.jpg)
- [embrace-in-the-crowd.jpg](/brand/assets/photo/embrace-in-the-crowd.jpg)
- [face-to-the-floor.jpg](/brand/assets/photo/face-to-the-floor.jpg)
- [hands-open-singing.jpg](/brand/assets/photo/hands-open-singing.jpg)
- [hands-raised-in-the-rows.jpg](/brand/assets/photo/hands-raised-in-the-rows.jpg)
- [hug-and-a-smile.jpg](/brand/assets/photo/hug-and-a-smile.jpg)
- [hug-by-the-cross.jpg](/brand/assets/photo/hug-by-the-cross.jpg)
- [kneeling-in-the-crowd.jpg](/brand/assets/photo/kneeling-in-the-crowd.jpg)
- [praying-at-the-altar.jpg](/brand/assets/photo/praying-at-the-altar.jpg)
- [preacher-reading-bible.jpg](/brand/assets/photo/preacher-reading-bible.jpg)
- [room-under-the-cross.jpg](/brand/assets/photo/room-under-the-cross.jpg)
- [singer-arm-raised.jpg](/brand/assets/photo/singer-arm-raised.jpg)
- [singer-bowed-by-the-cross.jpg](/brand/assets/photo/singer-bowed-by-the-cross.jpg)
- [singer-in-the-light.jpg](/brand/assets/photo/singer-in-the-light.jpg)
- [singer-reaching-out.jpg](/brand/assets/photo/singer-reaching-out.jpg)
- [worship-leader-singing.jpg](/brand/assets/photo/worship-leader-singing.jpg)
- [worship-stage-and-room.jpg](/brand/assets/photo/worship-stage-and-room.jpg)
- [worship-team-lyrics.jpg](/brand/assets/photo/worship-team-lyrics.jpg)
- [young-man-eyes-closed.jpg](/brand/assets/photo/young-man-eyes-closed.jpg)
- [young-man-worship-blue.jpg](/brand/assets/photo/young-man-worship-blue.jpg)
- [young-woman-praying.jpg](/brand/assets/photo/young-woman-praying.jpg)

## Who runs this guide
- **Owner:** Adam Hardegree, Lead Pastor. He approves every change to this guide and every piece of copy before it posts.
- **Get the files:** the claude.ai design system (Journey Church Design System), this repo (`journey-design`, `brand/` on the website), the logo PNGs in `assets/logo/` and `assets/logo/digital/`, photos in `assets/photo/`, templates in `slides/`.
- **Ask for help:** ask Adam. Request route for volunteers and staff: [to confirm].
- **Review:** look the guide over once a quarter; anything retired gets marked retired, not deleted.

**Version log**
| Date | Change |
|---|---|
| 19 Sep 2026 | First decisions: one red, cream and ink, voice rules |
| 1 Oct 2026 | Shape: corners, shadows, interface patterns |
| 2 Oct 2026 | New look: Bricolage Grotesque, red not italic, social system, heavy J |
| 16 Nov 2026 | Gold-standard examples, a template for every size, motion and loop rules, check before handoff |
| 18 Nov 2026 | Who we are and voice, Communication levels, Social engine and safeguarding filled in from the Pro Church Tools Journey Edition files (they win over older rules); 8-piece sermon week; portrait first; TikTok and Google sizes; photo consent and safeguarding |
| 17 Nov 2026 | Logo clear space, minimums, misuse, digital files, contact lockups; full color specs and pairings; photo rules, shot list, iPhone setup, three-stage edit, Journey 2026 preset; this section |

## Who we are and voice
Source of truth: `Pro Church Tools - Journey Edition/00 Journey Plan and Drafts/Draft - Who We Are and Voice.md` (18 Nov 2026). This is the church's voice, not Adam's personal writing voice. Adam's own pieces (devotionals, letters from him) keep his voice and his exclamation points.

**Mission line, used exactly every time:** "We are a community of people that does life in the presence of God."

**Six values, word for word** (header style `01 · Holy Scriptures`): 01 · Holy Scriptures, *Live the Word* · 02 · Prayer, *Pray Boldly* · 03 · Love, *Loved People, Love People* · 04 · Spirit-Led, *Walk in the Spirit* · 05 · Discipleship, *Never Stop* · 06 · Evangelism, *Be the Church*. Closing line: *A House Built for His Presence.* Full text in the draft; quote it exactly, never paraphrase.

**Three characteristics:** a presence-driven church; we put people first; one body, many backgrounds.

**Journey is / is not:**
| Journey is | Journey is not |
|---|---|
| Built around the presence of God | Built around a personality |
| Relaxed | Casual about God |
| Straight with you | Harsh with you |
| Spirit-filled, with order | Hype or chaos |
| A people | A building or a show |
| One body from many backgrounds | One kind of person |
| Deep | Complicated |
| Honest about money and mess | Polished to look perfect |

**Four voice traits** (markers to tag drafts with): **Plain** (normal words, "meet with God," not "encounter the divine"), **Warm** (name the real worry: parking, kids, what to wear, being singled out; no self-describing adjectives), **Straight** (the real number, date and reason; never dress up a gap), **Presence-first** (connect it to Jesus and His presence once, where it's true; never as a slogan). Not churchy, hyped, harsh or salesy.

**"You might believe ___ about church. At Journey, ___."** Approved lines: church is something you attend / the church is a people; get your life together first / come as you are; built around the pastor / built around the presence of God; Spirit-filled means out of control / gifts of the Spirit with dignity and order (doctrine: Adam checks); church only wants your money / quarterly finance reports; church stays surface level / we love deeply; everyone looks the same / one body from many backgrounds.

**Who we write to (personas):** Marcus, far from God (Plan a Visit); Danielle, seeker (Plan a Visit, then the Tuesday devotional); Jorge, new believer (JC Connect); Renee, growing believer (JC Connect, then a team); Tasha and Mike, parents (Plan a Visit with kids' names). Write every post to one of them. The person is the hero; the church is the supporting character.

**Writing style:**
- Bible: NKJV by default; NLT or ESV labeled when NKJV reads awkwardly, e.g. (Galatians 2:2, NLT). Book names in full. Ranges with a plain hyphen: 1 Peter 1:10-19. Quote exactly or don't use quotation marks. Keep LORD as the translation has it.
- Capitalize He, Him, His for God and the Holy Spirit. Lowercase church, kingdom, gospel, heaven (the values keep their own capitals).
- Dates and times: graphics `Sun Oct 12 · 6 PM`; lists and The Weekly `Sun Feb 14 · 9:00 AM`; sentences "Sunday, October 12" (no "th," no year unless needed). Ranges with a plain hyphen: 10:00 AM-12:00 PM (the one allowed dash). Spell out one to nine in sentences; digits from 10; ages and money always digits.
- Contact: **6225 Lake Gray Blvd Ste 2, Jacksonville, FL 32244** · phone **(904) 302-5320** · text **(904) 503-6772** · web lowercase, no https or www: `journeychurch.org/planavisit`. Contact lockup and all print: address and journeychurch.org only, no phone, no socials.
- Real Sunday facts for guests: about 90 minutes, casual (most people wear jeans), free coffee in the lobby, free parking in the guest lot by the main entrance, no forms at the door, nobody is singled out.
- Insider words, defined on first use: JC Connect, our class for anyone who wants to make Journey home · Journey Kids, birth through fifth grade, every Sunday service · Good Living Food Pantry, third Saturday, 9:00 AM-2:00 PM · Good Work, our job placement ministry · the Church Center app · Wednesday prayer at 7:00 PM · The Weekly, our email. Also explain presence, the altar, Spirit-filled, Healing Room, baptism and tithe for guests. No ministry short codes in public.
- Stories: real only, with a written yes. Never combine two people. Nothing from prayer requests, care or ministry requests.
- Emails from Adam sign off "Much Love,".

## Communication levels
Source of truth: `Draft - Communication Levels.md` and the Ads and Comms playbooks (Adam's decision, 17 Nov 2026). They replace Journey Command's four tiers. The hub is the **Journey app**; every app link has a web twin and a QR. **The Weekly** is the email bulletin. The Tuesday devotional carries at most one line about church life.

| Level | Who | Run | Request due | Examples |
|---|---|---|---|---|
| 1 Church-wide moment | Everyone + guests | 8 weeks + debrief | 12 weeks before | Easter, Christmas Eve, Vision Sunday |
| 2 Church-wide ongoing | Everyone, all year | Always on; Highlight every 4 to 6 weeks, or a 2 to 4 week mini campaign | 6 weeks | JC Connect, Discipleship Groups, Serve Teams, Baptism, Food Pantry, the app |
| 3 Large audience | Big slice of the church | 4 weeks | 6 weeks | 21 Days of Prayer, Encounter Night, Cocoa & Carols, Missions Sunday |
| 4 Ministry audience | One ministry | 2 to 4 weeks | 4 weeks | Youth, Kids Camp, VBS, Women, Men, Healing Room |
| 5 Small or invited group | A known list | Direct only | 2 weeks | Trip teams, leader trainings, elders |

- Level 1 is Adam's call only, one at a time, 3 to 4 a year. Late requests drop a level or move dates.
- **Level 1 arc:** Awareness weeks 1 to 4 (launch, quiet, interactive poll, callback), Interest weeks 5 to 7 (invite cards, value pairing, fresh format), Urgency week 8 (Launcher video, 7-day Sprint: a post and story every day, site banner, church-wide text twice). Sprint week is information over inspiration. Debrief within 7 days with real Planning Center numbers.
- **Levels 2 to 5 shape (4 weeks):** launch, quiet, value, urgency. Three weeks: drop week 2. Two weeks: weeks 1 and 4. Urgency lives in the wording only.
- **Caps:** stage one announcement a week (two at most, Level 1 or a Level 2 Highlight); pre-service loop 8 slides (QR slides count); church-wide text Level 1 only, 2 sends per campaign; 3 event emails per segment (announce, mid-runway, final call); ministry texts 2 a month per segment; push 2 a week church-wide, 1 per segment; 1 event promo post per platform per day (stories don't count); 1 site banner at a time; mailers 2 to 3 a year. Levels 4 and 5 never get the stage on their own; they can be smuggled into a story or testimony.
- **No landing place, no promotion.** The app page, its web twin and the Planning Center sign-up exist before anything is made.

**Channel grid** (Y used, S smuggled only):
| Channel | L1 | L2 | L3 | L4 | L5 |
|---|---|---|---|---|---|
| Journey app | Y featured | Y | Y | Y | Y private |
| Website | Y banner | Y | Y | Y ministry page | |
| The Weekly | Y top story | Y Highlight | Y | Y list line | |
| Tuesday devotional | Y one line, last 2 weeks | | | | |
| Church-wide text | Y max 2 | | | | |
| Ministry text | | | | Y | Y |
| Instagram feed + Reels | Y | Y | Y | | |
| Instagram stories | Y | Y | Y | Y | |
| Facebook | Y | Y | Y | Y group/page | |
| YouTube description | Y | Y | | | |
| Stage | Y | Y Highlight | S | S | |
| Pre-service slides | Y | Y | Y | Y | |
| Welcome desk | Y | Y | Y | | |
| Direct | | | | Y | Y |

**Announcement formula: one story, one next step.** Story in 1 to 2 sentences (a person or a picture, real numbers only). Next step word for word: **"Open the Journey app and tap [Event Name] to [sign up / get details]."** Slides and stories: **"Details in the Journey app."** plus a QR and short web address. The Weekly and web: **"Sign up at journeychurch.org/[slug]."** Exception: "come Sunday" asks give the day and times. Times, rooms, prices and ages live on the app page. Never send people to the office phone, a leader's email, "talk to Pastor" or a paper sheet. Script written Monday, reviewed by Adam, locked Saturday. Value pairings quote the six values exactly.

**The Weekly (email), in order:** title "The Weekly · Week of Feb 14"; a 2 to 3 sentence pastor note; Featured (Level 1, or the Level 2 Highlight if none); Highlight card; day by day Sunday to Saturday, at most 2 cards between days; Coming up (Level 3 and 4, one line each, with a link); the next-step line; footer lockup (address and web only). Filled from Planning Center only. Never carries private items or care details.

**The Weekly pre-service slide** (every Sunday): 1920 × 1080 (3840 center), two Journey photos, the QR as hero, web address in Inter 30px+, headline "Your whole **week** at Journey, in one email." No event names or dates on it; the QR opens the web sign-up. Levels 4 and 5 reach the screens only through this slide. Event loop slides read "Event · Day Date · Time" + "Details in the Journey app" + QR. Every loop ends with a "New here?" connect slide. The QR card may use the information-card style (rounded corners, soft shadow).

**Promo library formats:** Photo Dump Carousel (6 to 10 consented photos, cover "This was X last year," last slide the When / Where block above the logo plus "Details in our app"; on Facebook the last slide's words become the caption), Skit Reel, Sermon Sprinkle, Poll Precursor, The Handoff, QR on the screen. Definitions in `Ads/Journey - Ads - Social Media Promo Library For Churches.md`.

**Weekly rhythm and prep:** Monday promo prep checklist (look back, look 3 weeks ahead, pick Sunday's one stage announcement, update slides to 8 or fewer, update app home card and pages, draft The Weekly, request assets 3 weeks ahead, assign levels to new requests). Order of work: Sunday, email and text, social, app and web, The Weekly. Staff never edit the site or SEO directly. Quarterly promo calendar filled three months ahead (13 columns); check Connect, Christ, Community and Collaboration each quarter. Adam checks doctrine (salvation, baptism, the Holy Spirit) on every Level 2 piece.

**Plan a visit and follow-up:** "Plan your visit" page shows times, address, parking, dress, kids (birth to 5th grade, secure check-in), about 90 minutes. One confirmation email from Adam, subject "A few notes for Sunday." Saturday reminder text. Stage welcome about 30 seconds, same words both services, with the QR connect card. Email from Adam within 48 hours, subject "For {first name}," ending in one question. One next step (JC Connect or a Discipleship Group) by week 3. Track "How did you hear about Journey?".

**Campaigns in the Social Planner:** every event is a campaign with its Planning Center facts, level, goal, one app next step, creative idea, run dates and owner. Post flow: Idea → Drafted → Needs Adam → Approved → Sent to Journey Command → Scheduled → Posted. Any edit after approval goes back to Needs Adam. Spec: `Social Planner/SOCIAL-PLANNER-SPEC.md`.

**Where events live:** Planning Center (PCO connector, calendar event instances, times in UTC so convert to Eastern) is the source of truth; the Journey Command connector (journeycommand.com/mcp) holds events, tasks and campaign notes. If they disagree, Planning Center wins and Adam is told. **Every post, campaign or date change is logged on the Social Media Calendar** (https://claude.ai/artifact/MZGzzaHhuajHQ9kzLWr7NT, team workspace) with date, platform, piece, campaign, level, status and asset link. Nothing is marked Approved, scheduled or posted without Adam's yes.

**Dates come from Planning Center, never the Project Pack.** 2027 anchors (checked 17 Nov 2026): Vision Sunday Jan 3; Serve Day + Pray and Go Sat Mar 20; Palm Sunday Mar 21; Journey to the Cross Mar 24 to 27; Good Friday Fri Mar 26, 6:30 PM; Easter + Baptisms Sun Mar 28; Freedom Conference May 7 to 8; VBS Jul 12 to 16; Guyana Jul 17 to 23; Missions Sunday Oct 24; Cocoa & Carols Fri Dec 10, 6:30 PM; Christmas Eve Fri Dec 24, 3:30 & 5:00 PM. Baptisms: Jan 23 (Sat night), Feb 28, Mar 28, Jun 26, Jul 25, Sep 11, Oct 24, Nov 28. Discipleship Groups Fairs Feb 7, Jun 6, Sep 12; Serve Team Fairs Apr 11, Sep 19. Recurring: Encounter Night first Wednesday 7 PM (none in July) plus Saturdays 6:30 PM Jan 23, Apr 10, Sep 11, Nov 6; JC Connect first Sunday 11 AM; Youth Wednesday 6 PM, Room 200; Young Adults third Thursday 7 PM; Food Pantry third Saturday 9 AM-2 PM; Journey Out first Saturday 10 AM. Pentecost: Planning Center says May 23; with Easter on Mar 28 it falls on May 16 [to confirm in Planning Center].

## Social engine and safeguarding
Source of truth: `Draft - Social Engine and Safeguarding.md` and the Social playbooks.

**Accounts:** Instagram and Facebook @journeychurchjax (facebook.com/journeychurch.org), YouTube @journeychurchjax. Planner also covers TikTok and Google Business Profile. The church owns every login; at least two staff have admin. Every post ends with an app step or journeychurch.org/planavisit, and traces back to the mission line. If a graphic feels slicker than Sunday, it fails.

**The sermon week (8 pieces):**
| Day | Piece |
|---|---|
| Sun | Story (by 8 AM) |
| Mon | Quote post (the only post that shows the speaker) |
| Tue | Clip 1 |
| Wed | Recap carousel (never names the speaker; ends "Save this" or "Send this to a friend") |
| Thu | Clip 2 with "Comment [KEYWORD] and we will send you…" |
| Fri | Full sermon on YouTube (title written as the question the sermon answers, description, chapters) + photo post 1 (6 to 10 photos) |
| Sat | Photo post 2, "See you Sunday. Sundays 9:00 & 11:00 AM." |
| Optional | Blog post |
Deadlines: sermon moments marked by Monday noon, clips cut by Monday night. A person watches the whole sermon and picks the moments, not AI. Promos sit on top of the sermon week and never replace a sermon piece: Levels 1 to 3 get feed posts, Level 4 stories only; a Level 1 Sprint adds one promo a day.

**Clips:** 30 to 60 seconds, from the middle third, captions burned in, end on a complete thought. No logo.

**Hooks:** under 12 words, second person, never bait, and the sermon must deliver it. Five kinds, one draft each: Flip it, Name the ache, Leave a gap, Ask about God, How and why. Score 0 to 5 on Curious, Common and Care; ship at 10 of 15 or better, scored by someone who didn't cut the clip. A hook that states something about God is flagged [doctrine: confirm] and stays in the sermon's own words. No outcome promises. Log kind and score with each post.

**Scoreboard:** weeks fully posted in a row (first goal 12, then 52 of 52); 10x posts (ten times our average reach on that platform); followers up 4% a month across all three, recorded on the 1st; crossover from "How did you hear about Journey?"; stories don't count toward reach. One-page quarterly report the first week of Jan, Apr, Jul, Oct (first: April 2027): streak, followers, reach by platform, engagement by format, top 5, bottom 5, crossover, keyword replies, three changes.

**Safeguarding:**
- No identifiable child without a parent's signed release. No name tags, lanyards, check-in stickers, school names or shirts, jerseys: crop or blur. Never pair a child's full name with a photo (first names only, with the parent's yes). No location tags on kids or students; never tag students' accounts.
- Strip GPS location from photo files. Never show a home or a school.
- Baptisms shown only with the person's yes.
- Any photo comes down the same day it's asked.
- No prayer request or testimony without a written yes, even if shared from the stage. Nothing that isn't public: finances, staff matters, counseling, care, unreleased plans.
- **Five-question check before every post:** points to Jesus and who we are? What exactly is it for? Comfortable if a critic found it in 30 years? Could it be clipped or misread? Worst possible misuse? Any pause: a second staff member looks, then Adam.
- **Comments:** answer within one business day; one calm reply to hostility, then stop; care needs move off the public thread the same day; doctrine questions go to a pastor. Never argue.

---

## Design catalog
Every design in the system, by group. Each link opens the design at full size.

### Brand
- [Lockups](/brand/guidelines/brand-lockups.html) · 700x200 — Horizontal is the default. Stacked for squares. Mark when the name is already written
- [Logo on grounds](/brand/guidelines/brand-logo-grounds.html) · 700x180 — Mark stays red on cream and dark; the whole lockup reverses on red and on photos
- [Logo rules](/brand/guidelines/brand-logo-never.html) · 700x180 — Clear space, minimums, and the list of never
- [Motion](/brand/guidelines/brand-motion.html) · 700x170 — One curve. Slow and few. Nothing bounces, scales, or spins
- [Never](/brand/guidelines/brand-never.html) · 700x200 — The short list of no
- [Ornaments](/brand/guidelines/brand-ornaments.html) · 700x180 — The entire set. No icon library, no gradients
- [Photography rules](/brand/guidelines/brand-photo-rules.html) · 700x180 — Our room, our people. No stock photography of people, ever
- [Photo treatment](/brand/guidelines/brand-photo.html) · 700x220 · Full natural color, a touch brighter. Never black and white by default, a duotone or a blur
- [Voice](/brand/guidelines/brand-voice.html) · 700x200 — Like a friend over coffee. Written to one real person

### Colors
- [Grounds](/brand/guidelines/color-grounds.html) · 700x150 — Cream is default; dark is punctuation, not rhythm
- [Ink ramp](/brand/guidelines/color-neutrals.html) · 700x150 — Borders, dividers, and the two muted text values
- [The one red](/brand/guidelines/color-red.html) · 700x150 — Journey red, its hover, and the small-text fallback
- [Red budget](/brand/guidelines/color-rules.html) · 700x170 · One red thing per view. On social, a red band or red field counts as it
- [Surfaces in use](/brand/guidelines/color-surfaces.html) · 700x150 — The five grounds, with the text colors they carry

### Type
- [Body — Inter 400](/brand/guidelines/type-body.html) · 700x170 — Plain speech: body, logistics, captions, buttons
- [Display · Bricolage Grotesque 800](/brand/guidelines/type-display.html) · 700x190 · The church's voice. One red word or phrase per headline
- [Eyebrow &amp; label](/brand/guidelines/type-eyebrow.html) · 700x150 — 0.22em tracking on eyebrows, 0.18em on labels
- [Type floors on graphics](/brand/guidelines/type-floors.html) · 700x200 — Pixel minimums on artboards and on stage. Nothing smaller, ever
- [Web scale](/brand/guidelines/type-scale.html) · 700x260 — Five fluid steps, from hero down to lead
- [Scripture — Newsreader](/brand/guidelines/type-scripture.html) · 700x200 — Quoted Scripture and pull-quotes only. Never a headline
- [Series face — Archivo Expanded Black](/brand/guidelines/type-series.html) · 700x190 — Series art and stage only. Never the website body

### Spacing
- [Page rhythm](/brand/guidelines/space-layout.html) · 700x170 — Section padding, gutter, measure, container
- [Radii](/brand/guidelines/space-radii.html) · 700x150 — The radius scale: xs 6 through xl 28, pills, and square for full bleed
- [Artboard geometry](/brand/guidelines/space-safe.html) · 700x170 — Sizes, safe zones, and the locked logo corner
- [Space scale](/brand/guidelines/space-scale.html) · 700x150 — Seven steps, the last one fluid

### Components
- [Actions](/brand/components/actions/actions.card.html) · 700x200 — Pill buttons — primary, dark, ghost, outline, small
- [Forms](/brand/components/forms/forms.card.html) · 700x230 — Field — boxed on cream, underline on dark
- [Graphics](/brand/components/graphics/graphics.card.html) · 1080x600 — ArtFrame, ArtText, ArtScripture, Logistics, Logo, LowerThird
- [Navigation](/brand/components/navigation/navigation.card.html) · 700x420 — Sticky cream Nav and the deep ink Footer
- [Structure](/brand/components/structure/structure.card.html) · 700x400 — Facts, Step, Meter, Disclose
- [Typography](/brand/components/typography/typography.card.html) · 700x380 — Headline with its red beat, Eyebrow, Scripture

### Website
- [journeychurch.org](/brand/ui_kits/journeychurch-org/index.html) · 1280x900 — Public church site — home, visit, messages, give

### Command
- [Journey Command · Brand](/brand/ui_kits/journey-command/index.html) · 1280x860 — Internal brand workspace — overview, sermon series, events

### Stage
- [Lower third](/brand/slides/lower-third-slide.html) · 1920x1080 — Left 96px, bottom 96px. A series may restyle the type but never move it
- [Lyric slide](/brand/slides/lyric-slide.html) · 1920x1080 — Centered, 110px, four lines max. No logo, no red — the system gets out of the way

### Social
- [The social system](/brand/guidelines/social-system.html) · 700x420 · No band first, Big band when needed, red or white field with no photo. Rotate every post
- [Who gets the photograph](/brand/guidelines/social-photo-budget.html) · 700x150 · Use our photos wherever we can. Only the quote post shows the speaker
- [Generated imagery](/brand/guidelines/social-generated.html) · 700x150 · Landscapes may be generated. People may not
- [Never, additionally](/brand/guidelines/social-never.html) · 700x150 · The social-specific list of no
- [The weekly sermon kit](/brand/guidelines/social-pieces.html) · 700x210 · Every Sunday message produces the same five pieces
- [Video, open, not agreed](/brand/guidelines/social-video-open.html) · 700x200 · Three departures on moving image that Adam has not settled
- [Square, no band](/brand/slides/social-square-photo.html) · 1080x1080 · First choice when the photo has a calm area for the type
- [Square, white band](/brand/slides/social-square-band-white.html) · 1080x1080 · The default band
- [Square, red band](/brand/slides/social-square-band-red.html) · 1080x1080 · Sundays and big days, headline all white
- [Square, black band](/brand/slides/social-square-band-black.html) · 1080x1080 · Evenings
- [Square, red field](/brand/slides/social-square-field-red.html) · 1080x1080 · No photo. Quotes, all white type
- [Square, white field](/brand/slides/social-square-field-white.html) · 1080x1080 · No photo. Simple announcements
- [Quote post](/brand/slides/social-quote.html) · 1080x1350 · Speaker photo, quote big with its last words red, name huge in a white band
- [Story](/brand/slides/social-story.html) · 1080x1920 · Big band story, facts as big as the headline
- [Person in front of the words](/brand/slides/social-cutout.html) · 1080x1080 · The cutout breaks out of the photo over the red word
- [Scripture post](/brand/slides/social-scripture.html) · 1080x1080 · Newsreader italic, hand underline, series marker, a real object photo
- [Handwriting post](/brand/slides/social-handwriting.html) · 1080x1350 · Hand-drawn circle, a handwritten note, place marker
- [Carousel, cover](/brand/slides/social-carousel-cover.html) · 1080x1350 · Photo cover, headline behind the person, circled Swipe
- [Carousel, teaching slide](/brand/slides/social-carousel.html) · 1080x1350 · Progress dashes, count, typed arrow, the red line keeps going
- [Carousel, close](/brand/slides/social-carousel-close.html) · 1080x1350 · Red field, heavy J, what to do next, no arrow
- [Carousel, all seven slides](/brand/slides/social-carousel-strip.html) · 7560x1350 · Your first Sunday at Journey as one artboard

### Sermon Series
- [Adding a series](/brand/series/adding-a-series.html) · 700x230 — Each series is a folder and a skin. The contract is the only thing they share

### Series · A House Built for His Presence
- [Series announce card](/brand/series/a-house-built/announce.html) · 1080x1080 — The feed post that launches a series. Date and times bottom-right
- [Scripture slide](/brand/series/a-house-built/scripture.html) · 1920x1080 — Newsreader, always — the one thing a series never restyles. Floor 80px
- [Sermon title](/brand/series/a-house-built/sermon-title.html) · 1920x1080 — Collage dimmed, week number ghosted, short red rule as the full stop
- [The skin](/brand/series/a-house-built/skin.html) · 700x230 — Our Culture, Vision, & Values — one face, one palette, one image idea
- [Series title](/brand/series/a-house-built/title.html) · 1920x1080 — The 16:9 series board — collage, spine, outline over solid, locked logo corner
- [YouTube thumbnail](/brand/series/a-house-built/youtube-thumbnail.html) · 1280x720 — 1280 × 720. Logo top-left, type left, speaker right

### Series · Christmas
- [Announce square](/brand/series/christmas/announce.html) · 1080x1080 — The one piece of Christmas artwork in the handoff. Title and dates are placeholders
- [Scripture slide](/brand/series/christmas/scripture.html) · 1920x1080 — Newsreader, always — the one thing a series never restyles
- [The skin](/brand/series/christmas/skin.html) · 700x230 — Not yet decided. What exists is the event-graphic treatment from the brand guide
- [Title — house fallback](/brand/series/christmas/title.html) · 1920x1080 — No Christmas skin exists yet, so this runs the house look with the plate open

### Events
- [Adding an event](/brand/events/adding-an-event.html) · 700x230 — Each event is a folder. Pick the kind, then the look follows
- [The logistics block](/brand/events/logistics-block.html) · 700x200 — When, where, what it costs. Set identically on every event

### Event · Baptism
- [About](/brand/events/baptism/about.html) · 700x210 — Sunday, October 25, 2026 · After Second Service, outdoors during Missions Sunday
- [Story](/brand/events/baptism/story.html) · 1080x1920 — 1080×1920 for Instagram + Facebook Stories. Type kept out of the top 250 and bottom 340 UI zones; face clear in the middle
- [Title slide](/brand/events/baptism/title.html) · 1920x1080 — Full-bleed photo, stacked outline word cream top-right and red bottom-left, face kept clear

### Event · Discipleship Groups
- [About](/brand/events/discipleship-groups/about.html) · 700x170 — Sign-ups Jan 4 in the lobby, groups start the week of Jan 18
- [Square](/brand/events/discipleship-groups/square.html) · 1080x1080 — Launch. Ink field with the key word ghosted — the rename is the message

### Event · Healing Room
- [About](/brand/events/healing-room/about.html) · 700x170 — Quarterly, in the Chapel. Anyone can come and be prayed for
- [Square](/brand/events/healing-room/square.html) · 1080x1080 — Recurring rhythm. Type on cream, paper tooth, ghosted initial

### Event · Journey Students
- [About](/brand/events/journey-students/about.html) · 700x170 — Wednesdays 7 PM, Room 200
- [Square](/brand/events/journey-students/square.html) · 1080x1080 — Ministry-specific. Photo above, cream below, ministry named in the eyebrow

### Event · Missions Sunday
- [About](/brand/events/missions-sunday/about.html) · 700x180 — Annual. Sunday, October 25, 2026
- [Blank plate — square](/brand/events/missions-sunday/blank-square.html) · 1080x1080 — Ground, tear and logo only. Set your own copy on it
- [Blank plate — story](/brand/events/missions-sunday/blank-story.html) · 1080x1920 — Ground, tear and logo only, at story proportions
- [Feed square](/brand/events/missions-sunday/feed-square.html) · 1080x1080 — 1080 × 1080. Same lockup, tightened
- [The skin](/brand/events/missions-sunday/skin.html) · 700x270 — Sunday, October 25, 2026 — a torn strip of aged paper over a field photograph
- [Stage screen](/brand/events/missions-sunday/stage-screen.html) · 1920x1080 — 1920 × 1080. The script M is the whole device
- [Story / Reel](/brand/events/missions-sunday/story.html) · 1080x1920 — 1080 × 1920. Logo lifted to 230px so it clears the story safe zone
- [Verse — square](/brand/events/missions-sunday/verse-square.html) · 1080x1080 — Mark 16:15. Set in the skin's faces, not Newsreader — see the skin card
- [Verse — story](/brand/events/missions-sunday/verse-story.html) · 1080x1920 — Mark 16:15 at story proportions

### Ministries
- [Adding a ministry](/brand/ministries/adding-a-ministry.html) · 700x250 — A folder, a skin card, a standing board, and the facts
- [Ministry vs. event](/brand/ministries/what-a-ministry-is.html) · 700x250 — An event is a date. A ministry is a standing part of the church

### Ministry · Good Living Food Pantry
- [Logo](/brand/ministries/good-living-food-pantry/logo.html) · 960x540 — Rebuilt from the supplied PNG: stacked GOOD / LIVING with apple O, FOOD PANTRY in brown
- [Screen slide · Monthly · Orchard Green](/brand/ministries/good-living-food-pantry/slide-monthly-green.html) · 1920x1080 — Every third Saturday, 10 AM – 1 PM
- [Screen slide · Monthly](/brand/ministries/good-living-food-pantry/slide-monthly.html) · 1920x1080 — Every third Saturday, 10 AM – 1 PM
- [Screen slide · Oct 17 · Orchard Green](/brand/ministries/good-living-food-pantry/slide-oct17-green.html) · 1920x1080 — Saturday, October 17, 10 AM – 1 PM
- [Screen slide · Oct 17](/brand/ministries/good-living-food-pantry/slide-oct17.html) · 1920x1080 — Saturday, October 17, 10 AM – 1 PM
- [Story · Monthly · Orchard Green](/brand/ministries/good-living-food-pantry/story-monthly-green.html) · 1080x1920 — 1080×1920 for Instagram + Facebook Stories
- [Story · Monthly](/brand/ministries/good-living-food-pantry/story-monthly.html) · 1080x1920 — 1080×1920 for Instagram + Facebook Stories
- [Story · Oct 17 · Orchard Green](/brand/ministries/good-living-food-pantry/story-oct17-green.html) · 1080x1920 — 1080×1920 for Instagram + Facebook Stories
- [Story · Oct 17](/brand/ministries/good-living-food-pantry/story-oct17.html) · 1080x1920 — 1080×1920 for Instagram + Facebook Stories

### Ministry · Good Work
- [Brand sheet](/brand/ministries/good-work/brand.html) · 1920x1080 — Colors, type and logo rules for Good Work
- [Logo options](/brand/ministries/good-work/logo-options.html) · 2540x5350 — Eight directions: 1a Linked, 1b Work Patch, 1c Good Work., 1d Next Step, 1e Level, 1f Handshake, 1g Good Work. + Handshake, 1h Handshake · Journey colors
- [Logo suite](/brand/ministries/good-work/logo-suite.html) · 1920x1680 — Horizontal, stacked, wordmark and icon, on cream and black
- [Logo](/brand/ministries/good-work/logo.html) · 960x540 — Primary lockup: handshake in Journey red + Newsreader italic wordmark

### Ministry · JC Connect Membership Class
- [Screen slide · Nov 1](/brand/ministries/jc-connect-membership-class/slide-nov1.html) · 1920x1080 — Sunday, November 1, 9 – 11 AM
- [Screen slide](/brand/ministries/jc-connect-membership-class/slide.html) · 1920x1080 — Recreated from the supplied graphic: boxed JC CONNECT lockup, Membership Class, three connects
- [Screen slide · Your First Step](/brand/ministries/jc-connect-membership-class/slide-first-step.html) · 1920x1080 — The standing slide with YOUR FIRST STEP under the lockup. Journey has no written membership, so this is the version for the website
- [Story · Nov 1 · Collage](/brand/ministries/jc-connect-membership-class/story-nov1-collage.html) · 1080x1920 — 1080×1920 for Instagram + Facebook Stories. A House Built collage up top fading into red
- [Story · Nov 1 · Red](/brand/ministries/jc-connect-membership-class/story-nov1-red.html) · 1080x1920 — 1080×1920 for Instagram + Facebook Stories. Solid red, one centered group, Journey Church logo at the bottom
- [Story · Nov 1](/brand/ministries/jc-connect-membership-class/story-nov1.html) · 1080x1920 — 1080×1920 for Instagram + Facebook Stories. Ruled date band low, Journey Church logo at the bottom

### Ministry · Journey Kids
- [About](/brand/ministries/journey-kids/about.html) · 700x190 — Birth through 5th grade. Sunday mornings
- [The skin](/brand/ministries/journey-kids/skin.html) · 700x230 — No photography. Cream, tooth, and one ghosted word
- [Standing square](/brand/ministries/journey-kids/square.html) · 1080x1080 — Typographic by default. No child photography without releases

### Ministry · Journey Women
- [Logo](/brand/ministries/journey-women/logo.html) · 960x540 — Florals and script lifted from the supplied file; JOURNEY and rules are live type
- [Screen slide · Blush florals](/brand/ministries/journey-women/slide-blush-florals.html) · 1920x1080 — Original blush with rose keyline and ghost corner florals
- [Screen slide · Cream florals](/brand/ministries/journey-women/slide-cream-florals.html) · 1920x1080 — Cream paper with blush keyline and ghost corner florals
- [Screen slide · Encounter Night (full details)](/brand/ministries/journey-women/slide-encounter-v2.html) · 1920x1080 — Cream with ghost florals. Sat Oct 10 · Dinner 5:30 · Service 6:30 · Register QR
- [Screen slide · Encounter Night](/brand/ministries/journey-women/slide-encounter.html) · 1920x1080 — Cream with ghost florals. October 10, 2026, 5:30 – 8 PM
- [Screen slide](/brand/ministries/journey-women/slide.html) · 1920x1080 — Logo large on blush pink, Journey Church mark at the bottom
- [Story · Encounter Night (full details)](/brand/ministries/journey-women/story-encounter-v2.html) · 1080x1920 — 1080×1920 Instagram + Facebook Stories. Sat Oct 10 · Dinner 5:30 · Service 6:30 · Register QR

### Ministry · Journey Worship
- [About](/brand/ministries/journey-worship/about.html) · 700x190 — The gathered room, and the team that serves it
- [The skin](/brand/ministries/journey-worship/skin.html) · 700x230 — The one ministry that lives on the dark ground
- [Standing square](/brand/ministries/journey-worship/square.html) · 1080x1080 — The room, not the band. Deep ground, one red

### Ministry · Journey Youth
- [About](/brand/ministries/journey-youth/about.html) · 700x190 — 6th–12th grade. Wednesdays
- [The skin](/brand/ministries/journey-youth/skin.html) · 700x230 — House look for now. The slot is open for the design files
- [Standing square](/brand/ministries/journey-youth/square.html) · 1080x1080 — Built once, reposted. Only the logistics change

### Projects
- [Arise & Build — screen](/brand/projects/arise-and-build-screen.html) · 1920x1080 — The same meter at 1920, padding 140, logo bottom-right at 360
- [Arise & Build](/brand/projects/arise-and-build.html) · 1080x1080 — The building campaign. The progress meter is the graphic; both figures from a live source
- [What makes it a project](/brand/projects/what-is-a-project.html) · 700x210 — Longer than an event, tracked over time, always with a number attached

---
*Before posting anything: confirm every date and number against Planning Center or the live site, and have Adam approve the copy.*
