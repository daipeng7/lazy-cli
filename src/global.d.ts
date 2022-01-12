/*
 * @Author: daipeng7
 * @Date: 2021-11-24 15:48:57
 * @LastEditTime: 2021-12-04 20:28:50
 * @LastEditors: daipeng7
 * @Description: 全局申明文件
 */
// 项目配置
interface ProjectConfig {
	root: string
	type: import('./config/index').ProjectType
	name: string
	context: string
	templatePath?: string
}

interface AppConfig extends ProjectConfig {
	frame: import('./config/index').AppFrame
	feature: Array<import('./config/index').AppFeature>
}

interface PackageConfig extends ProjectConfig {
	feature: Array<import('./config/index').PackageFeature>
}


interface CommandInterface {
	prompt(): Promise<any>
}
