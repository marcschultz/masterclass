# AGENTS.md

## Purpose

These rules apply to creative coding projects: experimental web tools for graphic design, typography, motion and generative design.

Prioritize understandable, flexible and reliable code. Prefer explicit, readable solutions over clever, compact or unnecessarily abstract ones. Shorter code is not automatically better.

## Learning Mode (masterclass plugin)

<!-- Keep this section when you adapt this file. It tells the AI how this file and the masterclass plugin work together. -->

When masterclass learning mode is active (started with `/masterclass:learn` or `$masterclass:learn`), its rules take precedence over this file wherever they conflict – especially for design decisions, suggestions, when to ask vs. decide, checkpoints, explanations, UI approach and libraries.
The same applies to masterclass coding mode (`/masterclass:coding` or `$masterclass:coding`): there, the user writes all code themselves and the AI never edits project files.
All other rules in this file still apply. When learning or coding mode is paused or not started, this file applies as written.

## Core Behavior

- Only change what was requested; make the smallest reasonable change.
- Preserve existing functionality. Never silently remove, disable, bypass or simplify features.
- Reuse existing structures and patterns where practical; do not refactor unrelated code without permission.
- Make reasonable low-impact decisions independently. Ask only when requirements are ambiguous or a decision significantly affects functionality, structure, dependencies or visual output.
- Suggest meaningful improvements when relevant, but do not implement them without permission.
- Never invent APIs, library capabilities or browser behavior; verify uncertainty.
- During experimentation, prioritize testable and understandable solutions over generalized architecture. Temporary implementations are fine for testing an idea.
- Create and modify project files only with the Edit/Write tools, never via shell commands (sed, echo, heredocs, etc.), so changes show as diffs and can be rewound.

## Technical Foundation

- Use HTML, CSS, JavaScript and p5.js {{P5_MAJOR}}.x (this project: v{{P5_VERSION}}).
- The local `libraries/p5.js` is the source of truth.
- {{P5_VERSION_RULE}}
- Use Vanilla JS and Browser APIs when they provide a practical advantage.
- Prefer existing capabilities before adding dependencies. Ask before adding or updating libraries.
- Store libraries locally; no CDN by default.
- Never modify files inside `libraries/` unless explicitly requested.

## Project Structure

Typical structure:

project/
├── index.html
├── AGENTS.md
├── css/style.css
├── js/
│   ├── sketch.js
│   ├── ui.js
│   └── export.js
├── assets/
└── libraries/p5.js

- Only create files and folders that are needed.
- `sketch.js` is the central control panel.
- Split substantial functional areas into dedicated files relatively early.
- Large classes usually get their own file; small related classes may share one.
- Keep script dependencies and loading order understandable.
- Use classic script loading by default; use ES Modules only when they provide a clear benefit.
- Do not reorganize existing projects unless required; suggest major structural changes first.

## sketch.js

Keep adjustable settings and shared state easy to find at the top:

// --------------------------------------------------
// CONFIGURATION
// --------------------------------------------------
// CANVAS
// ASSETS
// TYPOGRAPHY
// ANIMATION
// INTERACTION
// EXPORT
// ...

// --------------------------------------------------
// GLOBAL OBJECTS / DATA
// --------------------------------------------------

// --------------------------------------------------
// CALCULATED GLOBAL VALUES
// --------------------------------------------------

Only include categories that are needed.

- `CONFIGURATION`: adjustable project values and UI presets/source of truth.
- `GLOBAL OBJECTS / DATA`: shared objects, arrays, loaded assets and changing state.
- `CALCULATED GLOBAL VALUES`: derived values required by multiple parts of the program.
- Keep temporary calculations local.
- Calculate derived values from their dependencies instead of hardcoding them.
- Recalculate derived globals when their dependencies change.

## JavaScript Style

- `camelCase`: variables, functions, properties, instances and filenames.
- `PascalCase`: classes.
- Use descriptive names; common abbreviations such as `x`, `y`, `z`, `w`, `h` are fine.
- Prefer traditional function declarations and verb + description names.
- Do not split trivial operations into functions; extract meaningful, substantial or reusable functionality.
- Do not pass global settings as parameters merely for architectural purity.
- Prefer early returns when they improve readability.
- Use classes when an entity benefits from its own state and behavior; concise methods such as `update()`, `display()` and `reset()` are fine.
- Plain objects are fine when they improve readability; do not restructure existing globals without a benefit.
- Prefer `for...of` when the array index is unnecessary.
- `map()`, `filter()` and `reduce()` are fine when readable.
- Both `==` and `===` are allowed; do not change them only for convention.
- Simple ternaries are fine; avoid nested ternaries.
- Use modern JavaScript when it improves readability, not merely to reduce line count.

## p5.js & Canvas

- Use native p5.js functionality when suitable; Vanilla JS and Browser APIs are also allowed.
- Default canvas: `createCanvas(windowWidth, windowHeight)`.
- Use 2D by default; WEBGL only when needed.
- Use `push()` / `pop()` to keep transformations and drawing styles local.
- Keep `draw()` readable without extracting trivial operations.
- Treat preview and export dimensions separately; choose scaling based on whether the output is fixed or responsive.

## Typography & Design

- Keep relevant design parameters centralized.
- Use actual font metrics and text measurements for positioning when practical.
- Expose meaningful design parameters as named configuration variables.
- One-off obvious technical values may remain inline.
- Derive values instead of hardcoding them when practical.
- Ask if it is unclear whether a value should become an exposed design parameter.

## HTML, CSS & UI

- Build interfaces outside the p5.js canvas with HTML/CSS; do not use p5.js DOM controls as the default UI system.
- Keep `index.html` explicit and readable; avoid substantial inline JS or CSS.
- Prefer writing controls directly in HTML instead of generating the whole interface programmatically.
- Global configuration variables initialize controls and remain their source of truth; avoid redundant parallel state.
- UI changes should normally be visible immediately. Use Apply/Update only when real-time calculation is impractical; ask before introducing it.
- Put substantial UI behavior in `ui.js`; configuration remains in `sketch.js`.
- Scripts are loaded in `<head>`, so HTML elements don't exist yet when a script file runs. `ui.js` defines a `setupUI()` function that is called from `setup()` in `sketch.js`.
- Keep the UI logically decoupled from the canvas: controls only change configuration variables, and `draw()` never reads DOM elements. Whether a panel floats over the canvas or the canvas makes room for it is a layout decision; ask.
- Prefer p5 interaction functions for canvas interaction and browser events when practical or outside the canvas.
- Desktop is the default target; ignore mobile/touch unless requested.
- Use CSS variables for recurring interface values when useful.
- Keep static styling in CSS and dynamic styling in JS only when part of the functionality.
- Do not introduce CSS frameworks or complex naming systems without a clear benefit and approval.

## Animation & Performance

- Target 60 fps for live previews; 30 fps is the minimum acceptable target.
- Do not artificially limit live preview with `frameRate()` by default.
- If live performance cannot reliably maintain 30 fps, optimize where necessary; performance may override readability when it materially affects the result.
- If needed, use time-based animation for unstable live previews.
- Export animation must remain frame-based, deterministic and independent of live preview performance.
- Standard export frame rate: 30 fps.

## Export & Reproducibility

- Put substantial export functionality in `export.js`; keep settings in `sketch.js`.
- Preview performance and export quality are separate priorities; export quality takes priority over rendering speed.
- Export must not permanently change preview dimensions, frame state, random seed, pixel density or rendering settings.
- Always provide visible feedback during export; show percentage progress for longer exports when possible.
- Use descriptive timestamped filenames such as `projectName_2026-09-30_143025.png`.
- If project-state JSON is supported, save everything required to restore the state reliably.
- Randomness should remain random during normal experimentation. Preserve a seed when needed to reproduce an export or saved project state; do not use the same fixed seed across sessions by default.

## Existing Code, Debugging & Testing

- Inspect relevant existing code before modifying it.
- Diagnose and understand problems before applying a targeted fix; prefer fixing the cause over introducing a workaround.
- Workarounds are acceptable when the underlying issue cannot reasonably be solved, but explain them.
- Verify affected functionality when possible: syntax, console, functionality, UI and relevant regressions.
- Never claim something was tested if it was not.
- Remove agent-only temporary debug code after testing.
- Keep collaborative debug code until the user confirms the issue is solved; ask before removing it later.
- Do not silently ignore relevant runtime or asset-loading errors.
- Use `console.error()` for technical errors and visible UI feedback for critical errors.

## Comments

- Comment in English, as full sentences ending with a period, on their own line above the code.
- Start every JavaScript file with a header comment: the file's title between dashed lines, then "What this file does:" with one line per main function. No copyright line in your own files.
- Keep the template markers (`// ----------------- Add your … code here. -----------------`) and add code below them.
- Do not comment obvious code.
- Comment calculations, non-obvious logic, unusual decisions, performance optimizations, browser-specific behavior and export logic.
- Explain *why* when the implementation choice is not obvious.
- Use large separators only for meaningful major sections.

## Decisions & Communication

Make reasonable low-impact decisions independently. Ask when requirements are genuinely ambiguous, existing functionality may be affected, a new dependency or major structural change is needed, the visual result depends on the decision, or the decision is irreversible/high-impact.

Actively mention approaches, Browser APIs, p5.js functionality or libraries that could significantly improve functionality, performance, creative possibilities or maintainability. Suggestions are not permission to implement them.

For normal, clearly defined changes, work directly without announcing an implementation plan. Discuss the approach first only when user input is genuinely required.

Keep communication short, clear and precise. Avoid repetition, unnecessary summaries, generic best-practice explanations and unsolicited tutorials. Explain relevant logic rather than every changed line. Collect related questions and ask them together when possible.

## Language

Chat, Code, comments and UI: English.