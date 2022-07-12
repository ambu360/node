const {readFile,writeFile, read} = require('fs').promises;
const { get } = require('http');
//const util = require('util')
//const writeFilePromise = util.promisify(writeFile)
//const readFilePromise = util.promisify(readFile)

//const getText = (path) =>{
  //  return new Promise((resolve,reject)=>{
    //    readFile(path,'utf8',(err,data)=>{
      //      if(err){
        //        console.log(err);
          //      reject(err)
            //}
            //resolve(data)
        //})
    //})
//}



//getText('./content/first.txt')
//.then(result => console.log(result))
//.catch(err=>console.log(err))

const start = async ()=>{
    try {
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/promise-2-text.txt',`This is the text: ${first}, ${second}`)
        console.log(first,second);
    } catch (error){
        console.log(error);
    }
    
    
}

start()




