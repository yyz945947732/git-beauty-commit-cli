import fs from 'fs-extra';

import runTasks from './run.js';

const pkg = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);

const helpText = `git-beauty-commit-cli v${pkg.version}

  Usage: bcommit [options]

  -h --help              Print this help
  -v --version           Print git-beauty-commit-cli version number
  -m --message           execute git commit with message

For more details, please see https://github.com/yyz945947732/git-beauty-commit-cli`;

const version = () => console.log(`v${pkg.version}`);

const help = () => console.log(helpText);

async function cli(options) {
  if (options.version) {
    version();
  } else if (options.help) {
    help();
  } else {
    return runTasks(options);
  }
  return Promise.resolve();
}

export default cli;
