# git-beauty-commit-cli

> git commit with beautiful massage

## Feature

execute `bcommit -m "xxx"` then it will capitalize the first letter in the git commit massage and add an emoji that match to the message type.

```bash
bcommit -m "feat: support new feature"
```

The above command is equivalent to executing the following command.

```bash
git commit -m "✨: Support new feature"
```

## Install

```bash
npm install --global git-beauty-commit-cli
```

## Usage

```txt
$ bcommit --help

  Usage
    $ bcommit [options]

  Options
    -h --help              Print this help
    -v --version           Print git-beauty-commit-cli version number
    -m --message           execute git commit with message

  Examples
    $ bcommit -m "fix: fixed the issue that this library cannot be used on Mac system"
```

## Workflow

- \$`git add .`
- \$`bcommit "YOUR COMMIT MESSAGE"` to make a commit
- \$`git push`

## Emoji

| emoji | type     | description                                                                                                 |
| ----- | -------- | ----------------------------------------------------------------------------------------------------------- |
| ✨     | feat     | A new feature                                                                                               |
| 🐛     | fix      | A bug fix                                                                                                   |
| 📖     | docs     | Documentation only changes                                                                                  |
| 💄     | style    | Changes that do not affect the meaning of the code                                                          |
| 🛠     | refactor | A code change that neither fixes a bug nor adds a feature                                                   |
| ⚡️     | perf     | A code change that improves performance                                                                     |
| ✅     | test     | Adding missing tests or correcting existing tests                                                           |
| 📦     | build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ⚙️     | ci       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| 🚀     | chore    | Other changes that don't modify src or test files                                                           |
| 🗑     | revert   | Reverts a previous commit                                                                                   |
| 🤞     | try      | Add untested to production                                                                                  |
| 🎉     | init     | Project init                                                                                                |

## Related

- [git-beauty-commit](https://github.com/yyz945947732/git-beauty-commit) - API for this module

## LICENSE

[MIT](https://github.com/yyz945947732/git-beauty-commit-cli/blob/master/LICENSE)

---

This project is created using [generator-stupid-cli](https://github.com/yyz945947732/generator-stupid-cli).
