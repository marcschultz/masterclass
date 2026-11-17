/*
 * {{TITLE_DASHES}}
 * {{PROJECT_TITLE}}
 * {{TITLE_DASHES}}
 *
 * What this file does:
 * - setup(): Runs once when the sketch starts. Add your startup code here.
 * - draw(): Runs continuously (frame by frame). Add your display code here.
 * - windowResized(): Resizes the canvas when the browser window changes.
 */


// Runs once when the sketch starts
function setup() {

  // Default full-window canvas.
  createCanvas(windowWidth, windowHeight);

  // ----------------- Add your startup code here. -----------------
}

// Runs continuously (frame by frame)
function draw() {

  // Clear the frame with a black background.
  background(0);

  // ----------------- Add your display code here. -----------------
}

// Keeps the canvas size in sync with the browser window.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
