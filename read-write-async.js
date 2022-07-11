const {writeFile,readFile,readFileSync,writeFileSync, read} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        result;
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        console.log(`${first}, ${second}`);
        writeFileSync('./content/result-test-async.txt',
        `here is txt: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})