/*
 * @Author: daipeng7
 * @Date: 2021-11-25 11:07:48
 * @LastEditTime: 2021-12-09 23:11:23
 * @LastEditors: daipeng7
 * @Description:
 */
import Config from '../config/index';
import Logger from '../shared/Logger';
import ora = require('ora');

import gitDownload = require('download-git-repo');

let instance: Base;
export default class Base {
	constructor() {
		const root = process.cwd();
		this.config = {
			root,
			type: Config.appDefaultType,
			name: Config.appDefaultName,
			context: root,
		};

		if (instance) {
			Object.assign(this.config, instance.config);
		}
		instance = this;
	}

	// 项目配置
	protected config: ProjectConfig;


	/**
	 * @description: 拷贝项目模版
	 * @param {string} repo
	 * @param {string} dirName
	 * @return {Promise}
	 */
	copyTemplate(repo: string, dirName: string): Promise<any> {
		return new Promise((resolve) => {
			const spinner = ora({ spinner: 'moon' });
			spinner.start('拷贝模版中');
			gitDownload(repo, dirName, err => {
				if (err) {
					spinner.fail('拷贝模版失败\n\n');
					Logger.Error(err);
					resolve(err);
				} else {
					spinner.succeed('拷贝模版成功');
					resolve(null);
				}
			});
		});
	}

	/**
	 * @description: 清空控制台
	 * @return {void}
	 */
	cleanTerminal(): void {
		process.stdout.write(
			process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
		);
	}
}
