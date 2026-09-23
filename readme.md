# Journey Church Design System

> **Coworkers, start here.** This repo is the single source for every Journey Church design: brand rules, logos, ministry, series and event graphics.
>
> - **Browse it:** open `index.html` (or yoursite.com/brand).
> - **Using Claude:** give Claude `brand.md`. It has the voice rules, colors, fonts, logo rules, ministry branding and links to every file. In a shared Claude Project, add this repo from GitHub and select `brand.md`, `readme.md` and `assets/logo/`.
> - **Claude Code:** clone this repo; `CLAUDE.md` and `SKILL.md` are read automatically.
> - **Adding something new:** file it as a Ministry (`ministries/`), Project (`projects/`), Series (`series/`) or Event (`events/`), one folder per name. Adam approves all copy before it posts.
> - **Don't edit** `_ds_bundle.js`, `_ds_manifest.json` or `_adherence.oxlintrc.json`; they're generated.

Journey Church is a single-campus church in Jacksonville, Florida — 6225 Lake Gray Blvd Ste 2, Jacksonville, FL 32244. Services are **Sundays 9:00 & 11:00 AM**. Adam Hardegree is Lead Pastor. Kids have their own space from birth through fifth grade. The current sermon series is *A House Built for His Presence* (Our Culture, Vision, & Values), and the current building campaign is *Arise & Build*.

This system covers two surfaces and one large body of graphics work:

| Surface | What it is |
|---|---|
| **journeychurch.org** | The public church site. Cream ground, one red accent, four typefaces with four jobs. |
| **Journey Command** (journeycommand.com) | The internal staff and volunteer workspace, behind auth. Its `/brand/` section is the living brand guide this system was built from. |
| **Graphics** | Social cards, event graphics, sermon series packages, and stage screens — authored at fixed output pixels (1080 square, 1080 × 1920 story, 1920 × 1080 screen). |

## Sources

Everything here was read from an attached local codebase, **`Brand Guide/`**, mounted read-only. It is the Journey Church Workspace brand folder:

- `Brand Guide/brand/css/journey.css` — the canonical site stylesheet. Its header states values were verified against the live site **31 Aug 2026**. This is the ground truth for every token and class.
- `Brand Guide/brand/css/journey-assets.css` — the asset-level system (graphics, series, stage, print, email), decided 19 Sep 2026.
- `Brand Guide/brand/css/brand.css` — the `/brand/` page chrome plus the series-artboard type classes.
- `Brand Guide/brand/index.html`, `brand/sermon-series/index.html`, `brand/events/index.html` — the three brand guide pages.
- `Brand Guide/brand/js/journey.js`, `brand/js/frames.js` — the only site behaviour, and the artboard fitter.
- `Brand Guide/brand/img/logo/` (16 PNGs), `brand/img/photo/` (8 JPGs), `brand/img/series/` (3 PNGs), `brand/download/` (3 PNGs) — all copied into `assets/`.
- `Brand Guide/BUILD-DESIGN-SYSTEM-REMAINDER.md` — a handoff note that enumerates the seventeen-component inventory this system builds, and lists the brand's open questions.

**Not read:** `Brand Guide/Journey Church.zip` and `Brand Guide/A House Build for His Presence.zip`. Both failed to transfer out of the mounted folder (the first exceeds the 30 MiB limit; the second arrived empty). Nothing in this system was inferred from them. If they hold the original React sources or the vector logo, re-attach their contents unzipped.

The brand guide is hosted behind auth on journeycommand.com. Assume a reader does not have access.

---

## Index

| Path | What it holds |
|---|---|
| `styles.css` | Global entry point. Import list only — link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `motion.css` |
| `base/` | `journey.css` (site stylesheet, ported) · `journey-assets.css` (graphics system, ported) |
| `components/` | 17 React primitives in six groups — see below |
| `ui_kits/journeychurch-org/` | Public site: Home, Plan a visit, Messages, Give |
| `ui_kits/journey-command/` | Internal brand workspace: Overview, Sermon series, Events |
| `series/` | One folder per sermon series, each free to look nothing like the last. `a-house-built/` plus the pattern card |
| `slides/` | Stage boards — lyric, lower third |
| `events/` | One folder per named event (`healing-room/`, `journey-students/`, `discipleship-groups/`, `missions-sunday/`), plus the shared logistics block and the adding-an-event test |
| `projects/` | Arise & Build at square and screen, plus what makes something a project |
| `guidelines/` | 33 specimen cards — Colors, Type, Spacing, Brand, Social |
| `slides/social-*.html` | Four house-look sermon-kit boards: story, quote, carousel cover and teaching slide |
| `assets/logo/` | 16 lockup PNGs · `assets/photo/` 8 photographs · `assets/series/` 6 series files · `assets/js/` the two ported scripts |
| `SKILL.md` | Agent Skills front matter, for use in Claude Code |

### Components

| Group | Components |
|---|---|
| Typography | `Headline`, `Eyebrow`, `Scripture` |
| Actions | `Button` |
| Forms | `Field` |
| Navigation | `Nav`, `Footer` |
| Structure | `Disclose`, `Facts`, `Meter`, `Step` |
| Graphics | `ArtFrame`, `ArtText`, `ArtScripture`, `Logistics`, `Logo`, `LowerThird` |

That inventory comes from the handoff note, which lists these seventeen and no others. Nothing was added. Each directory carries `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one card HTML.

---

## CONTENT FUNDAMENTALS

The brand's own summary: **like a friend over coffee.**

**Who you are writing to.** One real person considering a visit — never "an audience," never "everyone." Second person, and the church is "we." "Come as you are." "Tell us you're coming." "Someone will meet you at the door."

**Register.** Warm, clear, honest. Short and human over clever. Concrete over aspirational: times, places, what actually happens. "Park anywhere. Someone in a red shirt will point you at a door." The instinct is to answer the practical question first and only then say the meaningful thing.

**Say Jesus.** Not "the divine," not "a higher purpose." The brand names this explicitly.

**Casing.** Sentence case everywhere except eyebrows and labels, which are uppercase and tracked. Series titles are uppercase because the typeface is set that way. Headlines end in a period, including questions of tone ("How Journey *looks*.").

**Punctuation, and this part is strict.**
- **No exclamation points. Anywhere.** This is a hard rule, not a preference.
- Service times use an ampersand: `Sundays 9:00 & 11:00 AM`.
- Dates read `Sun Oct 12 · 6 PM`. The middle dot separates a label from its value and a place from a time.
- The handoff note bans em dashes in component documentation. Body copy on the site uses them sparingly; component READMEs do not.
- **No emoji.** Ever.

**Words the brand does not use.** Blessed. Anointed. Season of. Powerful. Breakthrough. Intercede. "Encounter" as filler. "Pursue God's presence." "Stand in unity." "Come ready to respond." Denominational shorthand generally. **The test as written:** *if the sentence could be lifted from any church email in the country, rewrite it.*

**Never invent.** Not a statistic, not a quote, not a testimonial, not a Scripture reference. Confirm every date and number against a live system — Planning Center or the live site — never a document and never memory. "A wrong dollar amount on a giving graphic is worse than no graphic."

**Copy shape on a graphic.** The eyebrow names the moment. The headline says it in one human sentence. The body adds a fact only if there is one. Every headline carries exactly one italic red word, and that word is the emotional beat — never "the," "and," or "of."

**Who owns copy.** Adam. Headlines in the brand guide are labelled placeholder shapes, not approved copy.

---

## VISUAL FOUNDATIONS

### Color
Cream, ink, and **one** red. `--ember` `#ff3a3a` is the whole accent system; `--ember-hover` `#e62d2d`; `--ember-small` `#9a1818` for red text under about 26px on cream, which is an accessibility fallback and not a second color. The ink ramp runs `#f7f4f0` cream → `#ece7df` alternate → `#d8d1c5` borders → `#9a948a` muted-on-dark → `#5a574f` muted-on-cream → `#2a2824` nav → `#0a0a0a` ink → `#050505` deepest. Print red is C0 M85 Y75 K0.

Red is never a background except a button and a pull-quote. One red thing per view. There is no second accent, no semantic green or amber, no ministry palettes, no sub-logos. On dark grounds and photos the accent word turns **white at 95% opacity** and red retreats to the eyebrow *or* the mark — one, not both. The logo was recolored to `--ember` on 19 Sep 2026; the older `#e31e26` is retired.

### Type
Four faces, four jobs, and the jobs do not overlap.
- **Inter Tight 800** — the church's voice. Headlines, titles, numbers. Tracking −0.035em, line-height 0.95. The italic accent is weight 700 at −0.03em.
- **Inter 400** — plain speech. Body, logistics, captions, buttons. Line-height 1.7.
- **Newsreader** — Scripture and pull-quotes **only**. Never a headline, never a title, never the church speaking. Italic marks the beat instead of red.
- **Archivo Expanded Black** (wdth 125, weight 900) — series art and stage only, where it has to read from row twenty. Never on the website body, never for logistics.

Web scale is fluid `clamp()` throughout: hero 3.25→9.25rem, display 2.25→4.75rem, h2 1.875→3rem, h3 1.25→1.75rem, lead 1.0625→1.25rem. Eyebrows are 0.78rem at 0.22em tracking; labels 0.72rem at 0.18em; both weight 600, uppercase.

Graphic type has **floors, not suggestions**: on a 1080 square, eyebrow 26px, headline 86px (96px on the four feed cards), body 34px; logistics label 22px and value 36px. On a 1920 stage screen, lyrics 100px, Scripture 80px, labels 30px. Nothing smaller, ever.

### Spacing and layout
`--section-y` `clamp(3.5rem,7vw,7rem)` is the vertical rhythm; `--gutter` `clamp(1.25rem,4vw,3rem)` the inline padding; container 84rem centered; reading measure 42rem on the web and 28ch on an artboard. Layout is always flex or grid with `gap` — the stylesheet says so in a comment: *never margin chains.* `.grid2/3/4` are `auto-fit minmax()` tracks; `.split` is `1fr / 1.15fr` collapsing at 820px.

Artboards are fixed pixels scaled to fit: feed 1080 × 1080 (safe 80px), story 1080 × 1920 (safe 250px top and bottom, 80px sides), screen 1920 × 1080 (action-safe 96px, title-safe 120px), 4K wall 3840 × 2160. Artboard padding is 80px on a square, 140px on a 1920 screen. **Build the square first** — the other two follow its decisions.

The one fixed-position element on the web is the sticky nav (`top:0`, `z-index:50`). In Command, the sidebar is `position:fixed` at 252px and the body carries a matching left pad above 1100px. On artboards, the logo is absolutely positioned in its locked corner and nothing else is.

### Corner radii
**Two values.** `999px` for pills — buttons, meters, the ember dot, the download chips. `0` for everything else — fields, boxes, artboards, photo frames. There is no 4px, 8px, or 12px radius anywhere in this system.

### Cards
There are no cards in the conventional sense. The nearest thing is `.box`: a flat `#ece7df` fill, generous padding, **no border, no radius, no shadow**. The cream variant adds a single 1px `#d8d1c5` hairline. Structure comes from hairlines (`.rule`, `.disclose` top border) and from hard color seams, never from elevation.

### Shadows
**There is no shadow system.** No inner shadows, no outer shadows, no elevation scale, no shadows on type. Two exceptions, both inside series artboards: the series type block carries `drop-shadow(0 6px 40px rgba(0,0,0,.55))` so outlined type survives a busy collage, and the `.lower3` panel is a solid 92% ink plate rather than a shadowed one. The stylesheet's own ornaments comment reads: *no icon library, no shadows, no gradients.*

### Gradients
Only as photo protection, never as decoration. The `.photo` scrim runs `rgba(5,5,5,.25)` → `.5` at 45% → `.88` at the bottom, so type sits on darkness rather than on a face; `.scrim-top`, `.scrim-left`, and a flat 55% variant cover the other directions. The series background adds a subtle top-and-bottom dim. The `.ember-underline` is technically a linear-gradient but reads as a solid 0.22em red bar behind text. **Protection gradients, never capsules** — the system has no pill or plate behind type on photos.

### Backgrounds and texture
Cream is the default ground; **dark sections are punctuation, not rhythm** (the stylesheet says exactly that). Two textures, and they are the only ones: `.grain` is 4% white dots at 3px in `mix-blend-mode: overlay`, for large dark fields. `.tooth` is 5.5% ink dots at 3px, the cream counterpart, for large cream fields. Never both, never on a photo. Full-bleed imagery is reserved for hero sections and artboards. The other background device is a **hard split** — two solid fields with no gradient between them, cream over ink by default.

### Imagery
Journey's own photographs, cleared for use. Treatment is `saturate(.85) contrast(1.05)` — natural color pulled slightly, warm rather than cool, with grain over the dark areas. **Never a duotone, never a color wash, never a blur, never a frame.** Crops favor hands, posture, and the room over faces in focus; real moments, never posed. No stock photography of people — our photos or none. Alt text describes what is happening, not just what is pictured. Anyone who has not agreed to appear comes out before it runs; children need a parent's yes.

### The ghost device
One per graphic: a numeral or a word set in Inter Tight 800 (or italic 700 for a word) at −0.06em, bleeding off an edge, at **8% opacity on cream and 10% on dark**. Or a progress meter. Never two devices, never on a photo, and the logo is never the device. In series art the ghost is stroked instead of filled — outline over solid is the house move.

### Transparency and blur
Transparency is used for hairlines (`rgba(10,10,10,.12)` on cream, `rgba(247,244,240,.16)` on dark), for muted text on colored grounds, for the photo scrims, and for the ghost device. **Blur is used essentially never** — the single instance in the whole source is a deliberately defocused collage behind a lower-third demo. There is no frosted glass, no backdrop-filter, no translucent nav.

### Motion
**One curve:** `cubic-bezier(.2,.7,.2,1)`. Slow and few. Hover and color 0.25s. Disclosure caret 0.35s, rotating 45° → 225°. Link underline sweeps 0.5s from the left. Scroll reveal is 1s of opacity plus a 22px rise, staggered 0.09s per sibling. The progress meter fills over 1.6s. The eyebrow hairline grows from 0 to 4rem over 1s. On stage: cuts and half-second dissolves; lower thirds slide in from the left over 0.6s. **Nothing bounces, scales, or spins.** `prefers-reduced-motion` collapses every duration to 0.01ms and pins revealed elements open.

### Hover and press
Hover is a **color change plus a 1px lift** — `translateY(-1px)`. Primary red darkens to `#e62d2d`; ink goes to pure black; ghost borders go from 70% to 100% white and pick up an 8% white fill; outline buttons invert to ink-on-cream; nav and footer links turn red; download chips swap both text and border to red; the mobile nav rows slide 0.65rem right. **There is no distinct press state** in the source — no shrink, no darker-still fill. Focus is a 2px `--ember` outline with a 3px offset, on `:focus-visible` only; fields switch their border to ember on focus.

### Borders
Hairlines, always 1px, always low-contrast. `#d8d1c5` on cream, `rgba(247,244,240,.16)` on dark, `rgba(10,10,10,.12)` for section rules. The exceptions are deliberate weight: the ghost button's 2px white border, the outline button's 1.5px ink, the disclosure caret's 1.5px red arms, the 14px red rule in series art, the 22px red spine down a series board's left edge, and the 12px red bar on a lower third.

---

## ICONOGRAPHY

**There is no icon set, and that is a decision, not a gap.** The brand guide states it twice, and the asset stylesheet carries the line `/* Iconography — decided: none. Arrows are typographic. */`.

- **No icon font, no sprite, no SVG icon library.** Nothing was copied in because nothing exists to copy. No CDN set has been substituted — Lucide or Heroicons on a Journey graphic would be exactly the tell the brand warns about.
- **Arrows are typographic.** `.arrow::after` inserts the Unicode right arrow `→` (U+2192) in Inter with a 0.35em left margin. Inline links use `&rarr;` directly. This is the only glyph used as an icon anywhere.
- **The ornament set is the icon set**, and it is six things: the ember dot (a 0.48em red circle before an eyebrow), the eyebrow hairline, the ember underline, the red numeral `.num`, the huge ghost letter, and the disclosure caret built from two 1.5px borders. All CSS, no files.
- **Labels replace icons.** The rule in the events guide is blunt: *a calendar or clock icon on a Journey graphic is the tell it wasn't made here. The label says "When."* The logistics block names its own fields.
- **No emoji, anywhere** — feed, site, email, or slide.
- **The `.mk` mark** (`assets/logo/mark-ember.png`) is the closest thing to an app icon: it appears at 1.9rem in the Command sidebar and is the brand's stated favicon and app-icon asset. It is a logo, not an icon in a set, and the logo rules apply in full.
- **Vector assets: none exist.** Every logo file is a PNG with transparency, rebuilt from the one original the office has. That is fine on screen and not fine on a banner, a shirt, or a sign.

### Illustration
There is none, and none was invented. The one illustrative asset in the brand is the **series collage** — twenty-two of Journey's own photographs cut rough, layered, desaturated, and grained. It is in `assets/series/` in all three crops, plus the flattened finished artwork. Nothing in this system was drawn.

---

## SERMON SERIES, EVENTS, PROJECTS

Journey's graphics work falls into three distinct kinds, and they are separate groups in the Design System tab because they follow different rules.

**Sermon Series** is the one place the system steps back. Each series is a folder under `series/<slug>/` and is free to look nothing like the last — its own face, palette, imagery, and device, declared up front in `skin.html`. Only the contract holds: the reversed horizontal logo in its corner at its size, and Scripture in Newsreader. Package: title 1920 × 1080, announce square, story, lower-third skin, plus sermon title and Scripture boards each week. Cards are tagged `group="Series · <Name>"` so each series groups itself in the tab. Two exist: **A House Built for His Presence** (running, fully skinned) and **Christmas** (skin undecided — the only artwork in the handoff is the "Light Has Come" square the events page used as a big-event example, so the rest runs the house look with the plate open and every value flagged). See `series/README.md` for the pattern.

**Events** stay in the house look and flex by kind — recurring rhythm, big event, ministry-specific, launch. Only big events borrow the series face. The logistics block is set identically every time and sits directly above the logo. Each named event is its own folder `events/<slug>/` with a `square.html` and an `about.html`, tagged `group="Event · <Name>"` so it groups itself in the tab. Five exist: Healing Room, Journey Students, Discipleship Groups, Missions Sunday, Baptism.

**Projects** run for months and carry a number. The progress meter is the device, both figures come from a live source, and the look is house throughout. One project exists in the source: *Arise & Build*. The events guide filed it under "giving & building"; it is split out here because its rules (progress, figures, duration) differ from a Sunday event's. Boards in `projects/`.

**Missions Sunday** — **Sunday, October 25, 2026**, annual, filed as a big event. Built from the approved canvas "Missions Sunday Event" (`uploads/Missions Sunday Event.html`), extracted verbatim rather than recreated. Seven boards: stage screen 1920 × 1080, feed square, story/Reel, two Mark 16:15 verse boards, and two blank plates to set your own copy on.

Its skin departs from the house look almost entirely, which is what a big event's skin is allowed to do. A torn strip of aged paper laid over a field photograph of vintage maps — the photo mirrored into itself and feathered at 62%, at `saturate(.78) contrast(1.06)`, vignetted and grained, with a rough clip-path edge and a double drop-shadow so it reads as a strip on paper. The palette is aged-paper olives (`#9E9263 #A69C73 #8C7E51 #A29667`) and a gold `#C8BA92`; **there is no ember red anywhere on it**. Two non-house faces: **Big Larian Customs** for the script word and **Poppins** 600/700 for everything set. Both binaries are bundled in `assets/fonts/`, along with the plate at `assets/events/missions-sunday/plate.jpg`. The skin lives in `events/missions-sunday/missions.css` — deliberately not in `tokens/`, because an event skin is not a system-wide amendment.

**One real conflict, flagged rather than silently accepted:** the verse boards set Mark 16:15 in **Poppins, not Newsreader**. That breaks the one clause of the series contract that never flexes, and it shipped this way. Either the contract gains an events carve-out or the verse boards get reset — that is Adam's call, and it is on the skin card.

**Still open on it:** room and service times (the set carries a date line, no logistics block), and whether Big Larian Customs is licensed for print and broadcast.

**Not in the source:** any other named event, project, or past series. Each needs a brief with real logistics before it gets a board.

## SOCIAL — the weekly sermon kit

Added 21 Sep 2026 from `uploads/sermon-social.md`, decided in build from a real message. Every Sunday produces the same five pieces: **Story** (1080 × 1920, asks the question, carries the link sticker), **Quote post** (1080 × 1920 and 1080 × 1350, lands one line), **Message recap carousel** (1080 × 1350, eight slides, the piece people save), **Reel** (1080 × 1920, 35 to 89 seconds), **Thumbnail** (1280 × 720).

**These layouts are house, not series.** A running series supplies the skin; only the series contract holds — the reversed horizontal logo in its corner at its size, and Scripture in Newsreader.

**Photo budget.** Only the quote post carries a photograph of the speaker, run wide and faded into ink top and bottom. The story is type alone with a ghosted glyph. The carousel uses landscape imagery, never a person.

**Story.** Ink ground, ghosted question mark at 10% cream bleeding off the top right, eyebrow at the 250px safe line in ember, headline autofit to a 920px measure with one italic ember word, two lines of teaser, speaker and series, then an action cluster (ember pill, typographic down arrow, tracked label) closing above 1670.

**Quote.** Display type, sentence case, last line in ember, an ember tick, then three tracked labels in fixed order: Scripture reference, speaker and series, where to watch. The reference is read from the transcript, never from memory; if nothing is being read nearby, the line comes off.

**Carousel.** Cover on the hook, six teaching slides, a close that encourages. Requires a frame in the message that already has six parallel parts — pitch a different angle rather than forcing one. Eight-segment tracker gutter to gutter on every slide, current segment ember, the rest deep ember brown. White lockup bottom-left at 280px on all eight. Roman numerals on the teaching slides. Landscape plates graded once and applied identically: pulled saturation, warm shadow lift, soft vignette, grain.

**Generated landscapes are allowed; generated people are not.** Declare a generated plate in the handoff. Carousel body copy is a compression of the preacher's telling, written by the builder — say so every time and have Adam read it before it posts.

**Open, and not agreed.** Video departs from the system in three ways Adam has not settled: a burnt yellow `#F2B134` on thumbnails and Reel headlines, Poppins for Reel captions, and uppercase Reel headlines. The proposal is that still graphics follow the system exactly and moving image carries its own small kit. Until he says yes, the still pieces are the system and video is an experiment with a date on it. **Nothing from the video treatment has been added to the tokens.**

**Never, additionally.** No logos or watermarks on a Reel. No speaker name anywhere on the carousel. No engagement bait in any caption. Never invent a name, a date, a series title, a Scripture reference or a number.

---

## Substitutions and open questions

**Fonts are Google-hosted here.** No woff2 binaries were in the handoff, so `tokens/fonts.css` loads Inter, Inter Tight, Newsreader, and Archivo (wdth 125, wght 900) from Google Fonts. **This is a substitution of delivery, not of typeface** — the families are the real ones. Production journeychurch.org self-hosts Inter and Inter Tight as **blocking** woff2 from `/fonts`, and the source carries an all-caps warning never to make that load non-blocking: CLS went from 0 to 1.0 the one time it was. **Please send the woff2 binaries** and I will replace the import with `@font-face` rules.

**Archivo is itself a stand-in.** The brand guide says Archivo Expanded is standing in for a licensed wide grotesque, and that an older stylesheet used Big Shoulders Display. `--font-series` lists Archivo first with Big Shoulders as the fallback. If the series goes to print at size, the office needs to settle the license.

**No vector logo.** Every lockup is a PNG. Nothing larger than a flier can print until an SVG or EPS surfaces. No mark was drawn or reconstructed.

**Four brand questions remain open**, carried over from the handoff note: the announce card's date (the source reads "Begins Sunday Oct 19" and Oct 19 2026 is a Monday — the slides and Command kit here read Sunday Oct 18, pending confirmation); consent for the twenty-two people in the series collage; the Archivo license; and the vector logo.

**Intentional additions:** none. The component inventory is exactly the seventeen the handoff note enumerates.
