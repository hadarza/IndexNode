const {Transform} = require('stream')

class ReplaceText extends Transform{
    constructor(char){
        super();
        this.replaceText = char;
    }

    _transform(chunk,encoding,callback){
        const transformChunk = chunk.toString().replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceText);
        this.push(transformChunk);
        callback();
    }
    _flush(callback){
        this.push("more stuff us being press through");
        callback();
    }
}

const xStream = new ReplaceText('x')
process.stdin.pipe(xStream).pipe(process.stdout)
