/*
 * @Author: daipeng7
 * @Date: 2021-11-30 15:55:08
 * @LastEditTime: 2021-12-09 23:24:47
 * @LastEditors: daipeng7
 * @Description: lib class
 */
import { resolve as pathResolve } from 'path';
import inquirer = require('inquirer');
import Base from './Base';
import Config, { PackageFrame, PackaggTpl, } from '../config/index';
import Utils from '../shared/Utils';
import ErrorCatch from '../decorators/ErrorCatch';

import inquirerCheckboxPlus = require('inquirer-checkbox-plus-prompt');

inquirer.registerPrompt('checkbox-plus', inquirerCheckboxPlus);

export default class Package extends Base implements CommandInterface {

	constructor() {
		super();
		this.config.name = Config.packageDefaultName;
		this.config.type = Config.packageDefaultType;
	}

	// 单例
	private static instance: Package;
	static getInstance() {
		if (!Package.instance) {
			Package.instance = new Package();
		}
		return Package.instance;
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
				choices: Object.values(PackageFrame)
			}
		]).then(answers => {
			const { root, name } = this.config;
			const context = pathResolve(root, name);
			this.config = { ...this.config, ...answers, context };
			this.cleanTerminal();
			this.initPackage();
			return answers;
		});
	}

	// 创建app
	@ErrorCatch.Exec('创建Package项失败:')
	async initPackage() {
		const { name, frame, context } = this.config as AppConfig;
		const dirExist = Utils.existsSync(context);
		if (dirExist) throw Error(`目录 ${name} 已经存在`);

		const err = await this.copyTemplate(PackaggTpl[frame], name);
		if (err) return;

	}
}
