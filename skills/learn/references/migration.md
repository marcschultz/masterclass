# Migrating a sketch from p5.js 1.x to 2.x

Read this when the user wants to upgrade a sketch, or when 1.x code fails in 2.x.
Teach the migration step by step (with checkpoints), don't rewrite everything at once.

## Step 1: Try it first
Change the script tag to 2.x and run the sketch. Many sketches work without changes.

## Step 2: If it breaks, choose with the user
- **Update the code** (recommended for learning – see the table below), or
- **Add a compatibility add-on** that restores 1.x behavior:
  - `preload.js` – restores `preload()` and 1.x loaders
  - `shapes.js` – restores 1.x shape functions
  - `data.js` – restores removed data helpers
  - `events.js` – restores 1.x `keyCode` behavior
  Source: https://github.com/processing/p5.js-compatibility
  (In the p5.js Editor: Settings > Library Management.)
- or **stay on 1.x** – still fine for finished sketches.

## Quick lookup: 1.x → 2.x

| 1.x | 2.x |
|---|---|
| `function preload() { img = loadImage(...) }` | `async function setup() { img = await loadImage(...) }` |
| `curveVertex(x, y)` | `splineVertex(x, y)` |
| `curve(...)` | `spline(...)` |
| `curvePoint()` / `curveTangent()` | `splinePoint()` / `splineTangent()` |
| `curveTightness(t)` | `splineProperty('tightness', t)` |
| `bezierVertex(x2, y2, x3, y3, x4, y4)` | three calls: `bezierVertex(x2, y2)`, `bezierVertex(x3, y3)`, `bezierVertex(x4, y4)` |
| `quadraticVertex(cx, cy, x, y)` | `bezierOrder(2)` + `bezierVertex(cx, cy)`, `bezierVertex(x, y)` |
| `bezierDetail(n)` | `curveDetail(n)` |
| `beginGeometry()` / `endGeometry()` | `buildGeometry(callback)` |
| `createVector()` | `createVector(0, 0)` or `createVector(0, 0, 0)` |
| `mouseButton === LEFT` | `mouseButton.left` |
| `keyCode === UP_ARROW` | `code === UP_ARROW` |
| `keyCode === "ENTER"` | `key === 'Enter'` |
| `touchStarted()` etc. | `mousePressed()` etc. + `touches` array |
| `textWidth()` incl. spaces | `fontWidth()` |
| `font.textToPoints(s, x, y, size, opts)` | `textSize(size); font.textToPoints(s, x, y, opts)` |
| `loadBytes(...).data` | `loadBytes(...)` (is the `Uint8Array`) |
| `append(arr, x)`, `subset()`, ... | `arr.push(x)`, `arr.slice()`, ... |
| old p5.sound | new p5.sound.js |

## Step 3: Check
Run the sketch, open the browser console, and fix remaining errors one at a time.
The p5.js Friendly Error System gives hints for preload-related problems.
Update the version in `.masterclass/profile.md` afterwards.
