/*
 * @Author: daipeng7
 * @Date: 2021-11-16 21:35:45
 * @LastEditTime: 2021-12-09 23:24:01
 * @LastEditors: daipeng7
 * @Description: Project Class
 */
import * as inquirer from 'inquirer';

import Logger from '../shared/Logger';
import ErrorCatch from '../decorators/ErrorCatch';

import { ProjectType } from '../config/index';
import App from './App';
import Base from './Base';
import Package from './Package';

import ora = require('ora');

export default class Project extends Base implements CommandInterface{
	constructor() {
		super();
	}
	// 单例
	private static instance: Project;

	static getInstance() {
		if (!Project.instance) {
			Project.instance = new Project();
		}
		return Project.instance;
	}


	@ErrorCatch.Exec('配置失败：')
	prompt(): Promise<any> {
		const spinner = ora();
		spinner.info('\r\n欢迎光临👏👏\n');
		const { type, name } = this.config;
		return inquirer.prompt([
			{
				type: 'list',
				name: 'type',
				message: '请选择项目类型：',
				default: type,
				choices: Object.values(ProjectType)
			}
		]).then((answers = {}) => {
			this.config = { ...this.config, ...answers };
			let command: CommandInterface;

			// 业务分支
			switch(this.config.type) {
				case ProjectType.APP:
					command = App.getInstance();
					break;
				case ProjectType.Package:
					command = Package.getInstance();
					break;
			}
			if (command) return command.prompt();
			else return Promise.reject(TypeError('功能项错误'));
		}).catch(error => {
			Logger.Error('', error);
		}).finally(() => {
			spinner.stop();
		});
	}

}
