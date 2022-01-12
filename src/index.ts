/*
 * @Author: daipeng7
 * @Date: 2021-11-15 23:17:23
 * @LastEditTime: 2021-12-04 21:53:09
 * @LastEditors: daipeng7
 * @Description: 脚手架入口
 */
import { Command } from 'commander';
import Project from './commands/Project';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');

const program = new Command();

program
    .name('pk-cli')
    .version(pkg.version, '-v, --version', 'output the current version');

program.command('init', 'init a project')
    .action(() => {
		Project.getInstance().prompt();
	});

program.parse(process.argv);
