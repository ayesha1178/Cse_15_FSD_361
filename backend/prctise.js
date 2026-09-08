// console.log("hello world");
// console.log("3+6=",3+6);
// console.log("This is a simple Javascript prog");
// console.log("Goodbye!");
// console.error("This is an error message");
// console.warn("This is a warning");
// console.info("This is an informational message");
// console.debug("This is a debug message");
// console.log(process.platform);
// console.log(global.Lnumber);
// global.Lnumber="51";
// console.log(global.Lnumber);
// process.on('exit',function()())
// process.on('exit',function()(
// console.log('good')
// ))

 const{EventEmitter}=require('events');
 const eventEmitter = new EventEmitter();
 eventEmitter.on('lunch',()=>{
     console.log('good');
    });