const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'video/mp4'});
   const stream = fs.createReadStream("movie.mp4");
   stream.pipe(res);
}).listen(process.env.PORT || 8000)