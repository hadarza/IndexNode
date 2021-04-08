const { createServer } = require('http')
const {stat, createReadStream,createWriteStream} = require('fs')
const { promisify } = require('util')
const filename = './movie2.mp4';
const fileInfo = promisify(stat);
const multiParty = require('multiparty')

const sendOGVideo = async(req,res)=>{
    const {size} = await fileInfo(filename);
    const range = req.headers.range;
    if(range){
        let [start,end] = range.replace(/bytes=/,'').split('-');
        start = parseInt(start,10);
        end = end ? parseInt(end,10) : size-1;
        res.writeHead(206,{
            'Content-Range': `bytes ${start} - ${end}/${size}`,
            'Accept-Range': 'bytes',
            'Content-Length': (start-end)+1,
            'Content-Type' : 'video/mp4'
        });
        createReadStream(filename,{start,end}).pipe(res);

    }else{
    res.writeHead(200,{
    'Content-Length': size,
    'Content-Type' : 'video/mp4'});
    createReadStream(filename).pipe(res);
    }
};

    createServer((req,res)=>{
        if(req.method == 'POST'){
            let form = new multiParty.Form();
            form.on('part',(part)=>{
                part.pipe(createWriteStream(`./copy/${part.filename}`))
                .on('close', ()=>{
                    res.writeHead(200,{'Content-Type': 'text/html'})
                    res.end(`<h1>file uploaded: ${part.filename}</h1>`)
                })
            })
        //    req.pipe(res);
        //    req.pipe(process.stdout);
        //    req.pipe(createWriteStream('./uploadedFile.file'))
        form.parse(req);
        }
        else if(req.url === "/og"){
            sendOGVideo(req,res);
        }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(`
            <form enctype="multipart/form-data" method="POST" action="/">
                <input type="file" name="upload-file">
                <button>Upload file</button>
            </form>
            `)
        }
}).listen(5050,()=>console.log("start server"));
