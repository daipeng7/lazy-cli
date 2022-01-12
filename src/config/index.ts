/*
 * @Author: daipeng7
 * @Date: 2021-11-24 15:48:38
 * @LastEditTime: 2021-12-09 23:12:08
 * @LastEditors: daipeng7
 * @Description:
 */
import { resolve } from 'path';

// 项目类型
export enum ProjectType {
	APP			= 'app',
	Package		= 'package'
}

export enum AppFrame {
	Vue		= 'Vue',
	Vue3	= 'Vue3',
	React	= 'React',
	None	= 'None'
}

export enum PackageFrame {
	TypeScript 	= 'TypeScript'
}

export const AppFrameTpl = {
	[AppFrame.Vue3]: 'daipeng7/lazy-template-vue3#master'
};

export const PackaggTpl = {
	[PackageFrame.TypeScript]: 'daipeng7/llazy-template-pkg-ts'
};

// app项目功能枚举
export enum AppFeature {
	Husky		= 'Husky',
	TypeScript 	= 'TypeScript'
}

// 包功能枚举
export enum PackageFeature {
	Husky		= 'Husky',
	TypeScript 	= 'TypeScript'
}

export default {
	appDefaultName: 'myApp',
	appDefaultType: ProjectType.APP,
	packageDefaultName: 'myPkg',
	packageDefaultType: ProjectType.Package
};
