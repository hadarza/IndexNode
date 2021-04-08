const fs = require('fs')

const readStream = fs.createReadStream('movie2.mp4')
readStream.on('data',(chunk)=>{
    console.log(chunk)
})
readStream.on('end',()=>{
    console.log("done")
})

readStream.on('error',(err)=>{
    console.error(err);
})

readStream.pause();

process.stdin.on('data',(chunk)=>{
    if(chunk.toString().trim()==="finish"){
        readStream.resume();
    }
    readStream.read();
})
