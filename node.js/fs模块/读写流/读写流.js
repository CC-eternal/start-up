const fs = require('fs');

/*
fs.readFile		一般用来读取体积小的文件
createReadStream	专门读取大文件
*/
//  fs.readFile('./153058548222c37cbfe4e06893.mp4_last.mp4',(err,data)=>{
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(data.length)
//		console.log(new Date()-start)
// 	}
// })

const rs = fs.createReadStream('./读写流/mm.mp4');
const ws = fs.createWriteStream('./读写流/2.mp4');	//可写流
//rs.resume()			//让可读流中的数据流动
// let start = new Date();
// rs.on('data',(chunk)=>{		//绑定data事件并且让数据流动
// 	//console.log(chunk.length)
// 	ws.write(chunk);
// })
rs.pipe(ws)

rs.on('end',()=>{		//当数据传送完毕时执行事件
	console.log('数据读取完成~~')
	//console.log(new Date()-start)
})

