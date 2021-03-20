const { Readable } = require('stream');

const advices=[
    "fhsdfjfksdfjgfgbdfhzds",
    "sdfsejfgsdbfsdjfsdf",
    "fhgfsdghfsdfhfsdgfvsdfhsdgfd",
    "fhiadfhsdfhsdgftdfgvdsfcg",
    "sdfhafgsdfkdsfgdfgcsgfsdgfuis"
]
class StreamFromArray extends Readable{
    constructor (Array){
        super({objectMode: true});  // encoding UTF-8 from buffer to string mode and chunk = this.Array[this.index]
        this.Array = Array;
        this.index = 0;
    }

    _read(){
        if(this.index < this.Array.length){
            const chunk ={
                data: this.Array[this.index],
                index:this.index
            }
            this.push(chunk)
            this.index++;
        }
    }
}
const s = new StreamFromArray(advices);
s.on("data",(chunk)=>{
    console.log(chunk);
})
s.on("end",()=>{console.log("done")})


