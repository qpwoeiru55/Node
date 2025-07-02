const fs  = require('fs').promises;


async function main(){
    let date = await fs.readFile('./read2.txt')
    console.log('1번',date.toString());

    date = await fs.readFile('./read2.txt')
    console.log('2번',date.toString());

    date = await fs.readFile('./read2.txt')
    console.log('3번',date.toString());

    date = await fs.readFile('./read2.txt')
    console.log('4번',date.toString());

    date = await fs.readFile('./read2.txt')
    console.log('5번',date.toString());
}

main();