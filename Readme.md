When implementing a new feature, branch off where your feature is going to be merged into (usually the `develop` branch)

A branch name should be named in following format:

`<task-id>-<task-label>_<brief-task-name>` (`01-feature-create_readme_file`)

Labels:

- feature
- fix
- improvement
- doc

### Commit messages

Commit messages should be detailed and be descriptive in following format:

- Write commit messages as a sentence
- Capitalize sentences
- Leave the last period off
- Make sure one commit does just one thing
- Use present tense for verbs in the commit description
- The description should clearly describe the changes which were done within the code or any other artifacts included into the commit

### Pull Requests (PR)

- To get code into the `develop` branch use a PR
- PR must go through a code review by a team member different from the submitter of the PR
- PR can be merged once there are at least 1 approvals
- Special requirements and merge criteria might be set for individual PR which should be described in PR's description explicitly
- Rebase branch by `develop` before sending a PR
- Use a default PR template
- PR name should follow a format `<task-id> <brief-task-name>` (`01: Create readme file`)
