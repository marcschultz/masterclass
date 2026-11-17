# Maintaining masterclass

Notes for the plugin maintainer. Participants don't need this file.

## Files

```
masterclass/
├── .claude-plugin/        Claude Code manifest + marketplace
├── .codex-plugin/         Codex manifest
├── .agents/plugins/       Codex marketplace
└── skills/
    ├── learn/             start/resume, behavior, references (versions, course style)
    ├── reset/             back up notes and restart setup
    └── new-project/       empty project from the course template (template/)
```

- Learning behavior: `skills/learn/behavior.md`
- Course code style: `skills/learn/references/course-style.md`
- p5.js version notes: `skills/learn/references/p5-v1.md`, `p5-v2.md`, `migration.md`
- New-project template incl. AGENTS.md: `skills/new-project/template/`

## Testing changes before publishing

Test your working copy directly, without installing it:

```sh
claude --plugin-dir ~/dev/masterclass
```

Run this in a p5.js test project, then try `/masterclass:learn` and `/masterclass:new-project`.

## Releasing a new version

1. Update the version in three places:
   - `README.md` (top line)
   - `.claude-plugin/plugin.json`
   - `.codex-plugin/plugin.json`
2. Add an entry at the top of `CHANGELOG.md`.
3. In VS Code: **Source Control** → message → **Commit** → **Sync Changes**.

Versioning: 1.0.1 for small fixes, 1.1.0 for new features, 2.0.0 for changes that
break how participants use the plugin.
