# Changelog

## 1.2.1

- Quiz and review questions vary the position of the correct answer and use plausible wrong answers, so there's no pattern to spot.

## 1.2.0

- The marketplace is now called `schultzschultz`, so the plugin shows up as `masterclass@schultzschultz`.
- **Reinstall required:** remove the plugin and the old `masterclass` marketplace once, then add `marcschultz/masterclass` again and install `masterclass@schultzschultz`. Your learning notes are not affected.

## 1.1.3

- New description for the "Intermediate" level in the setup: "I’m comfortable modifying code and have used p5.js occasionally."

## 1.1.2

- Open questions use a plain text field where the tool offers one (Copilot Chat); in Claude Code they are asked as plain chat text.

## 1.1.1

- Open questions (e.g. the project name in `new-project`) are asked as plain chat text instead of a button dialog with placeholder options.

## 1.1.0

- Learning notes are organized by topic (16 fixed topics, e.g. Drawing & color, Transformations, Typography).
- Older notes without topics are sorted into topics automatically, without losing any line.
- Review can focus on one topic.

## 1.0.0

First public release.

- Learning mode with checkpoints (idea, design, code, explain), started on purpose with `learn`.
- Creative ownership: all design decisions stay with you; design placeholders as a profile setting.
- p5.js first: HTML/CSS UI panel decoupled from the canvas; browser APIs and new libraries only with a reason.
- p5.js 1.x and 2.x support with version detection and migration notes.
- Course code style and explanation depth by level.
- Commands: `learn`, `reset`, `new-project`.
- Works with Claude Code, Codex and VS Code Copilot Chat.
