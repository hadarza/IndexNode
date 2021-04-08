const events = require('events')
let ev = new events.EventEmitter();
var c1 = (data,data2) =>{
    console.log("Event: ",data, data2);
}
ev.on('my_Event',c1)
    ev.emit('my_Event','data', ' data2')
    ev.emit('my_Event','data',' data2')
ev.off('my_Event',c1);
