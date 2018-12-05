/*function sayHello(name)
{
    console.log('Hello ' + name)
}
sayHello('Siva');
 //console.log();//global
 //setTimeout();  
 //clearTimeout();
 //setInterval()
 //clearInterval()
 //var message = ' ';
 global.console.log("siva"); 

 var sayHello = function(name){
console.log('Hello');
 }
 sayHello(hello);*/
 
//console.log(module);
//var logger = require('./logger');

//logger.orange('message');

//const path = require('path');
//var pathobj = path.parse(__filename);
//console.log(pathobj);
/*const os = require('os');
var total= os.totalmem();
var freememo = os.freemem();
console.log('Total Memory' + total);
// template string //ES6 ( ECMAScript 6)
console.log(`Total memory : ${total}`);
console.log(`Free memory : ${freememo}`);
const fs = require('fs');
const files =  fs.readdirSync('./');
console.log(files);
fs.readdir('./', function(err,files){
    if (err) console.log ('Error', err);
    else console.log('Result', files);
});*/
/*const EventEmitter = require('events');
const emitter = new EventEmitter();
// Raise  a Listener
emitter.emit('message logged');
emitter.on('Message Logged', function(){
console.log('Listener call')
});*/
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
res.write('Hello World');

res.end();
    }
    if (req.url === '/api')
    {
        res.write(JSON.stringify([1,2, 3]));
    }
});

server.listen(3000);
console.log('Listening on port 3000....');

