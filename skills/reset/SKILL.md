---
name: reset
description: Back up the masterclass learning notes and restart setup. Only runs when the user explicitly invokes it.
disable-model-invocation: true
---

# Masterclass reset

If you are running in Codex or VS Code Copilot Chat, read
[../learn/other-tools.md](../learn/other-tools.md) for command names.

1. Explain once: this backs up the profile and notes to `.masterclass.backup/`
   and restarts setup; sketch files stay untouched. Then ask as a button question
   (AskUserQuestion in Claude Code; elsewhere see other-tools.md):
   "Reset your masterclass profile and notes?"
   Options: Reset – "Back up and start setup again" / Cancel – "Keep everything as it is"
   Then wait. On Cancel, stop and say nothing changed.
2. If yes: rename `.masterclass/` to `.masterclass.backup/`
   (replace an older backup). Never touch source files.
3. Then run the setup from [../learn/SKILL.md](../learn/SKILL.md) (section 2a)
   and continue in learning mode.
