/*
 * @Author: daipeng7
 * @Date: 2021-11-25 15:24:35
 * @LastEditTime: 2021-12-04 21:23:01
 * @LastEditors: daipeng7
 * @Description: Utils
 */
import * as fs from 'fs';

/**
 * @description: 检验文件/文件夹是否存在
 * @param {string} dirName
 * @return {boolean}
 */
const existsSync = (_path = ''): boolean => {
	if (!_path) return false;
	return fs.existsSync(_path);
};

export default {
	existsSync
};
