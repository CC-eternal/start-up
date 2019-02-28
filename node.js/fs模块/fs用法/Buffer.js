//fs模块是node.js中内置的一个核心模块
//file system
//const  fs = require('fs');

/*
    Buffer是一种数据结构
        专门存放二进制数据，以十六进制数据显示

        buf.legnth 表示字节长度
               一个英文一个字节，一个中文三个字节

        buf.toString()方法转成字符串


 */
let str = '海文';
let buf1 = Buffer.from(str);

let buf2 = Buffer.alloc(10) //先清楚内存

let buf3 = Buffer.allocUnsafe(10);//其中可能含有未清除的数据

