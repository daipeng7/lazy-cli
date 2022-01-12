/*
 * @Author: daipeng7
 * @Date: 2021-11-24 23:48:39
 * @LastEditTime: 2021-12-09 23:24:42
 * @LastEditors: daipeng7
 * @Description: app相关指令
 */
import { resolve as pathResolve } from 'path';
import inquirer = require('inquirer');
import Base from './Base';
import { AppFrame, AppFrameTpl } from '../config/index';
import Utils from '../shared/Utils';
import ErrorCatch from '../decorators/ErrorCatch';

export default class App extends Base implements CommandInterface{

	constructor() {
		super();
	}

	// 单例
	private static instance: App;
	static getInstance() {
		if (!App.instance) {
			App.instance = new App();
		}
		return App.instance;
	}

	prompt(): Promise<any> {
		return inquirer.prompt([
			{
				type: 'input',
				name: 'name',
				message: '请输入项目名称：',
				default: this.config.name
			},
			{
				type: 'list',
				name: 'frame',
				message: '请选择项目框架：',
				choices: Object.values(AppFrame)
			}
		]).then(answers => {
			const { root, name } = this.config;
			const context = pathResolve(root, name);
			this.config = { ...this.config, ...answers, context };
			this.cleanTerminal();
			this.initAPP();
			return answers;
		});
	}

	// 创建app
	@ErrorCatch.Exec('创建APP项失败:')
	async initAPP() {
		const { name, frame, context } = this.config as AppConfig;
		const dirExist = Utils.existsSync(context);
		if (dirExist) throw Error(`目录 ${name} 已经存在`);

		const err = await this.copyTemplate(AppFrameTpl[frame], name);
		if (err) return;

	}

}
