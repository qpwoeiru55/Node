const {odd, even} = require('./var')
const checkNum = require('./func')



function checkNum2(str){
    if(str % 2){
        return odd;
    }else{
        return even;
    }
}


console.log(checkNum(10));
console.log(checkNum2('111'));
