// console.log('Hello from NodeJs');

// console.log(__dirname);
// console.log(__filename);
//
// console.log(process.cwd());
//
// const {a, myFunc} = require('./services/test')
// console.log(a);
// myFunc();

//////////////////////////
//http
//////////////////////////
// const http = require('node:http');
//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type':'application/json'})
//
//     if(req.url === '/cars'){
//         switch (req.method){
//             case 'GET':
//                 return res.end(JSON.stringify({
//                     data: 'my cars'
//                 }))
//             case 'POST':
//                 return res.end(JSON.stringify({
//                     data: 'Want to create car'
//                 }))
//         }
//     }
// });
//
// server.listen(5555);

//////////////////////////
//path
//////////////////////////

// const path = require('node:path');
//
// const filePath = path.join(process.cwd(), 'service', 'test.js');
// console.log(filePath);
//
// console.log(path.basename(filePath)); //остання частина шляху
//
// console.log(path.dirname(filePath)); //все окрім останньої частини
//
// console.log(path.extname(filePath)); //віддає розширення файлу
//
// console.log(path.parse(filePath)); //формує об'єкт про шлях
//
// console.log(path.normalize('D:\\okten-study\\///may-2024\\nodejs-sept-2024\\//service')); //нормалізує шлях
// console.log(path.isAbsolute('./services/test'));

//////////////////////////
//readline
//////////////////////////

// const readLine = require('node:readline/promises');
//
// const start = async () => {
//     const rlInterface = readLine.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     const name = await rlInterface.question('What is your name? ');
//     const age = await rlInterface.question('How old are you? ');
//
//     console.log(`Hello, ${name} - ${age}`);
//     rlInterface.close();
//     // process.exit(0)
// }
//
// start();

//////////////////////////
//fs
//////////////////////////

// const afs = require('node:fs/promises');
// const fs = require('node:fs');
// const readLine = require('node:readline/promises')
//
// const path = require('node:path')
//
// const start = async () => {
//     // await fs.mkdir(path.join('storage', 'asd'), {recursive:true})
//     const filePath = path.join('storage', 'adddd.txt')
//     // await fs.writeFile(filePath, 'Hello\n')
//     // await fs.appendFile(filePath, 'Hello2\n')
//     // const text = await fs.readFile(filePath, {encoding: 'utf-8'})
//     // console.log(text);
//     // await fs.rename(filePath, path.join(process.cwd(),'storage', 'asd', 'MyFile2.txt')) //перемещение
//     // await fs.rename(filePath, path.join(path.dirname(filePath), 'adddd.txt')) //изменение имени файла
//     // await fs.copyFile(filePath, path.join(path.dirname(filePath), 'MyFile.txt')) //copyFile
//     // await fs.rm(path.join(process.cwd(), 'storage'), {recursive: true}) //remove directory
//
//     // await fs.unlink('111.txt') //remove file
//
//     // console.log(await fs.stat('services/test.js')); //statistic of file
//     // const stats = await fs.stat('services/test.js'); //statistic of file
//     // console.log(stats.isDirectory());
//
//     // const fileStream = fs.createReadStream(filePath, 'utf-8')
//     // const rl = readLine.createInterface({input: fileStream})
//     //
//     // try{
//     //     for await (const line of rl){
//     //         await afs.appendFile('res.txt', `${line}--------------\n`)
//     //     }
//     // }finally{
//     //     await rl.close()
//     // }
//     const readStream = fs.createReadStream('cat.jpg');
//     const writeStream = fs.createWriteStream('123.jpg')
//     // readStream.on('data', (chunk)=>{
//     //     writeStream.write(chunk)
//     // })
//     readStream.pipe(writeStream)
// }
//
// start();

//////////////////////////
//os
//////////////////////////

// const os = require('node:os')
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.version());
// console.log(os.networkInterfaces());
// console.log(os.platform());

//////////////////////////
//events
//////////////////////////
const emitter = require('node:events');

const em = new emitter.EventEmitter();
em.on('fcall', (name, age)=> {
    console.log('fcall', name, age)
})
// em.on('scall', ()=> {
//     console.log('scall')
// })
em.once('scall', ()=> {
    console.log('scall')
})

em.emit('fcall', 'Max', 15)
em.emit('scall')
em.emit('scall')
em.emit('scall')
em.emit('scall')