
/*
	模块的分类（module）：
		核心模块	fs	path
		自定义模块
			必须使用	./	../

			每个模块默认都是相互独立的
			如果A模块需要B模块的数据
			必须让B模块自己使用exports暴露相应的数据

		第三方模块
*/
/*
    每个模块中的代码都是包裹在一个立即执行函数中的
    同时立即执行函数都有五个形参
    exports     专门用了暴露模块数据的一个对象
    require     专门用来引入外部模块的函数
    module      当前的模块
    _filename     当前文件的绝对路径
    _dirname    当前文件夹的路径

    module.explues === explues
    实际上是module.explues暴露的.
 */
let a = 2;
let b = 3;
let c = 3;
module.exports.c = c;

console.log(global)
