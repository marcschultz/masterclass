# Course code style

The course's starter template defines the house style. Match it in every file
you create or change. If the project's own code differs, follow the project.

## File headers

Every JavaScript file starts with a header comment. Files the participant
creates (or you create for them) get a header **without** a copyright line:

```js
/*
 * -----------------
 * Particle Field
 * -----------------
 *
 * What this file does:
 * - setupUI(): Connects the HTML controls to the configuration variables.
 * - updateLabels(): Shows the current slider values next to the controls.
 */
```

- Title between dashed lines (dashes as long as the title).
- "What this file does:" followed by one line per main function or purpose.
- Keep the list up to date when you add or remove a main function.
- Never change or remove an existing copyright header from course files.

## Comments

Write comments in English, as full sentences ending with a period.
A comment goes on its own line above the code it describes.

Comment density depends on the level in the profile:
- **beginner**: like the template – a short comment above every logical block,
  even simple ones ("Clear the frame with a black background.").
- **intermediate**: comment calculations, non-obvious logic and the purpose of
  functions; skip obvious single lines.
- **advanced**: only non-obvious logic, unusual decisions, performance and
  browser-specific behavior (as in the project rules).

Explain *why* when the reason isn't obvious.

## Template markers

The template contains marker comments such as:

```js
// ----------------- Add your startup code here. -----------------
// ----------------- Add your display code here. -----------------
```

Keep them. Add new code below the matching marker. Don't add new markers of
this kind; use section comments (see below) for structure instead.

## Formatting

- Function declarations: `function drawParticles() { … }` (verb + description).
- A blank line after the opening brace of `setup()`, `draw()` and other
  top-level functions, as in the template.
- 2 spaces indentation, semicolons, double quotes for strings.
- Comments before functions describe what the function does:
  `// Keeps the canvas size in sync with the browser window.`

## sketch.js structure – introduce it step by step

The project rules describe sections for sketch.js (CONFIGURATION,
GLOBAL OBJECTS / DATA, CALCULATED GLOBAL VALUES). Don't add them all at once.
Add a section the first time it's needed, above the header-less code part,
and explain in one or two sentences what it's for:

```js
// --------------------------------------------------
// CONFIGURATION
// --------------------------------------------------

// CANVAS
// Background brightness (0 = black, 255 = white).
let backgroundBrightness = 0;
```

- First adjustable value → add CONFIGURATION.
- First shared object, array or loaded asset → add GLOBAL OBJECTS / DATA.
- First value derived from others and used in several places →
  add CALCULATED GLOBAL VALUES.
- Order: header comment, then sections, then setup(), draw(), other p5.js
  event functions (windowResized(), mousePressed(), …), then own functions.

## New files – introduce them step by step

- **beginner**: keep everything in sketch.js until it gets hard to read; then
  suggest splitting as a learning step (e.g. "Your UI code could live in its
  own file – want to do that next?").
- **intermediate / advanced**: split substantial areas (UI, export, large
  classes) into their own files as the project rules describe.
- File locations follow the project: scripts in `js/`, styles in `css/`,
  libraries in `libraries/`.

## index.html

Keep the template's commented sections and add new lines in the right place:

```html
<!-- External libraries -->
<script src="libraries/p5.js"></script>

<!-- Project files -->
<script src="js/sketch.js"></script>
<script src="js/ui.js"></script>
```

- New libraries go under "External libraries", after p5.js.
- New project files go under "Project files" in a clear order.
- UI controls go in `<body>`, with a short comment above each group.

## CSS

- One comment above each rule explaining its purpose or the reason
  ("Prevent browser scrollbars while rendering a full-screen canvas.").
- Keep the template's base rules (box-sizing, full-viewport html/body,
  canvas display: block).

## Template example code

The template's draw() may contain an example (e.g. the text "p5.js is ready").
When the participant starts adding their own display code, ask once whether
the example can be removed. Don't remove it silently.
