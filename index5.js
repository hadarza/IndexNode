process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const axios = require('axios');

const data = JSON.stringify({
    name:"Hadar Zaguri",
    Job: "Programmer"
})

axios.post('https://reqres.in/api/users',data).then(res =>{
    console.log(`status code ${res.status}`);
    console.log(`Body: ${JSON.stringify(res.data)}`);
}).catch(err =>{
    console.log(err);
})