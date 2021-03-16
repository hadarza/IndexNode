process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const http= require("https")

const data = JSON.stringify({
   name:"Hadar Zaguri",
    Job: "Programmer"
});

const options = {
    hostname:'reqres.in',
    path:'/api/users',
    method:'POST',
    header:{
        'Content-Type': 'application/json'
    }
};

// request
const req = http.request(options,(res) =>{
    let body ='';
    console.log("Status code : ", res.statusCode)
    res.on('data',(chunk)=>{
        body+=chunk;
    })
    res.on('end',()=>{
        console.log("Body: ", JSON.parse(body))
    })
})
req.write(data);
req.end();

