const fs = require('fs');

const logger = (req,res,next)=>{
    const method = req.method;
    const route = req.path;
    const time  = new Date();
    const content = method +' '+route +' '+time +'\n';
    fs.appendFile('log.txt',content,{encoding: "utf-8"},(e)=>{
        if(e){
            console.log(e);
        }
    })
    console.log(content);
    next();

}

module.exports = logger ;