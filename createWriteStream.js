const fs = require('fs');


const writeStream = fs.createWriteStream('./writeme2.txt')
writeStream.on('finish', () =>{
    console.log("파일쓰기 완료");
})

writeStream.write("1\n");
writeStream.write("2");