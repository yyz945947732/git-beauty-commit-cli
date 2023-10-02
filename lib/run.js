import chalk from 'chalk';
import { $ } from 'execa';
import beauty from 'git-beauty-commit';

async function runTasks(options) {
  if (!options.message) {
    console.log(
      'Nothing happened. if you want to execute git commit please add the -m parameter.',
    );
    return;
  }
  try {
    const beautyMessage = beauty(options.message);
    await commit(beautyMessage);
    console.log(chalk.green('commit success!'));
  } catch (err) {
    console.log(chalk.red(err));
  }
}

/**
 * @private
 *
 * 提交信息
 * @param {string} message 信息
 */
async function commit(message) {
  await $({ shell: true })`git commit -m "${message}"`;
  if (stdout) {
    return stdout;
  }
  if (stderr) {
    console.log(chalk.grey(stderr));
  }
}

export default runTasks;
