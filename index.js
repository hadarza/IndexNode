let promise = new Promise(function(resolve,reject){
    try{
        resolve("Greet")
    }
    catch{
        reject(new Error())
    }
});

promise.then(
    result => {console.log(result)},
    error => {console.log(error)}
)