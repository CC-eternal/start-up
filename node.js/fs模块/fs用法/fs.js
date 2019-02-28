/*fs模块是node.js 中内置的一个核心模块
file system 这个模块专门用来对系统文件的增删该查操作


  writeFile(文件路径，写入的数据,{flag:'a'},(err)=>{})   //写入数据
    1.没有相应的文件时，创建
    2.可以在文件里面写入任何的数据类型，所有的数据都会被隐式转换成字符串
    3.{flag:'a'}   不修改之前的数据

    readFile(路径，(err,data)=>{})                          //读取数据
        1.读取到的是Buffer数据
        2.data是接收的数据

    fs.rename(老路径，新路径，()=>{})
         1.把旧路径移到新路径
         2.可以改名

    fs.watchFile(路径，{interval:10},(cur,pre)=>{
             cur 现在的文件状态
            pre 上次文件变换前的状态
            {interval:10}   监控时间
    })

    fs.unlinkSync(路径)     //删除文件，有后缀名

    fs.rmdir(路径，(err)=>{})           //删除文件夹

    fs.mkdirSync()          //新建文件夹

    fs.readdir(路径，(err,data)=>{})       //读取指定文件下的所有文件

    fs.truncateSync(路径,长度)      //限制指定文件的字节长度

    fs.existsSync(路径)           //判断指定路径下的文件/文件夹    抛出true/false

    fs.statSync(路径)             //查看文件的信息

*/
   const fs = require('fs');
   let result = fs.unlinkSync('./heaven.txt')
/*
    fs.writeFile('./hello.text','hello',{flag:'a'},(err)=>{           //异步创建
        if(err) {
             console.log(err)
        }else {
            console.log('数据写入成功')
       }
    })

    let resylt = fs.writeFileSync('./heaven.text','我是同步heaven')     //同步创建

    fs.readFile('D:/Desktop/images/动态壁纸+音源/壁纸/2b小姐姐尼尔.mp4',(err,data)=>{
        if(err) {
            console.log(err)
        }else{
            fs.writeFile('./1.mp4',data,(err)=>{
               if(err) {
                 console.log(err)
               }
            })
        }
    })
*/
