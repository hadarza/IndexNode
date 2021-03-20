const Stream = require('stream')
const readableStream = new Stream.readableStream({
    read() { }
})
readableStream.push('hi!')
readableStream.push('ho!')