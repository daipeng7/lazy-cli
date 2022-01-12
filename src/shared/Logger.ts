/*
 * @Author: daipeng7
 * @Date: 2021-11-21 21:47:40
 * @LastEditTime: 2021-11-25 15:35:26
 * @LastEditors: daipeng7
 * @Description: 日志类
 */
export default class Logger {

	static Error(notice = '错误', error?: Error): void {
		console.error(notice, '\n');
		console.error(error);
	}

	static Info(message: string) {
		console.info(message);
	}

	static Warn(message: string) {
		console.warn(message);
	}
}
