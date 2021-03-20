const stream = require('stream')
const readableStream = new stream.Readable()
const advices=[
    "fhsdfjfksdfjgfgbdfhzds",
    "sdfsejfgsdbfsdjfsdf",
    "fhgfsdghfsdfhfsdgfvsdfhsdgfd",
    "fhiadfhsdfhsdgftdfgvdsfcg",
    "sdfhafgsdfkdsfgdfgcsgfsdgfuis"
]
var index = 0;
readableStream._read= () =>{
    if(index < advices.length){
        const chunk = advices[index]
        readableStream.push(chunk)
        index++;
    }
}

readableStream.on('data',(chunk) =>{
    console.log(chunk)
})

readableStream.on('end',()=>{
    console.log('done')
})
