# Proposal Bot workflow

- Resolve local paths relative to this project folder so it can be moved.
- Make changes locally and provide a running local preview for testing before pushing.
- Do not push automatically. When the user says "Push to github", commit and push all pending project changes, including additions and deletions, with a descriptive commit message. Review the complete diff and run relevant checks first. Exclude secrets, local configuration, generated files, and saved project data. Never force-push without explicit authorization.
- Preserve Git history. Confirm the intended repository if its connection is missing; do not initialize replacement history or guess the destination.
- Use `start-proposal-bot-local.ps1` for preview at http://127.0.0.1:4181/ with separate local test data.
- Local and Main use the shared image library at `\\server2\administration\Dashboards\Proposal Bot\Project Images`. Local uses this path by default; Main needs a read-only Docker mount of the same share. Keep saved projects separate from this image library. Verify the live mount before claiming Main has been switched.
- `John Files/Dev_Notes_AGENTS.md` is reference material containing credentials. Never commit it or repeat its credentials. The user's explicit-push workflow supersedes its automatic-push guidance.
- A push does not authorize separate production deployment or infrastructure changes.
