// Code your solutions in this file
const writeCards = (strArr, eventName) => {
    const newArr = []
    for(let i=0; i<strArr.length; i++){
        newArr.push(`Thank you, ${strArr[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArr
}

const countDown = (num) => {
    while (num >= 0){
        console.log(num)
        num --
    }
}