const fs = require('fs')
const content = 'Node.js'

fs.writeFileSync('text.json',JSON.stringify(content));

fs.unlinkSync('text.txt');