const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8',(error, result)=>{
    if(error){
        console.log(error)
        return;
    }
    // declaring the first result file
    const first = result;
    readFile('./content/second.txt', 'utf8', /* adding a callBack function here*/(error, secondResult)=>{
        if(error){
            console.log(error)
        }
        // declaring the second result file
        const second = secondResult
        writeFile('./content/result.txt', `the result new file is in here dickson${first}, ${second}`,
        // adding a callBack function here
        (error, result)=>{
            if(error){
                console.log(error)
            }
            console.log(result)
        })
    })
})