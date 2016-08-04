var requireDir = require('require-dir');
//导入构建任务
requireDir('./gulp/tasks', { recurse: true });
//导入构建插件
requireDir('./gulp/plugins', { recurse: true });