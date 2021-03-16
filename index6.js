const fs = require('fs');
//aysnc way non blocking
fs.readFile('text.txt','utf8',(err,data) =>{
    if(err) throw err;
    console.log(data);
})
//sync way
const data = fs.readFileSync('text2.txt',{encoding: 'utf-8', flag:'r'});
console.log(data);

// will get excute before aysnc way
console.log("gg");

fs.stat('text.txt', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    //we have access to the file stats in `stats`
    console.log(stats.isDirectory());
    console.log(stats.isFIFO());
    console.log(stats.size);
    console.log(stats.isFile());
})