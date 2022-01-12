/*
 * @Author: daipeng7
 * @Date: 2021-11-16 16:13:20
 * @LastEditTime: 2021-11-25 16:04:08
 * @LastEditors: daipeng7
 * @Description: 错误捕获装饰器
 */
import Looger from '../shared/Logger';
import * as is from 'is-type-of';

export default class ErrorCatch {
	// 执行错误
	static Exec(message?: string | '') {
		return function<T>(target: T, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
			const targetFn = descriptor.value;
			const logError = (error: Error) => {
				const notice = `${message}，请查看 ${propertyKey} 方法`;
				Looger.Error(notice, error);
			};
			if (is.promise(targetFn)) {
				descriptor.value = async function(...args): Promise<any> {
					try {
						return await targetFn.apply(this, args);
					} catch (error) {
						logError(error);
					}
				};
			} else if (is.function(targetFn)) {
				descriptor.value = function(...args): any {
					try {
						return targetFn.apply(this, args);
					} catch (error) {
						logError(error);
					}
				};
			} else {
				logError(Error(`${propertyKey} 非函数！请检查`));
			}
			return descriptor;
		};
	}
}
