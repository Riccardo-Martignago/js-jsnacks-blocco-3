const array = [43,45,54,54,54,5,5656,76,75,58,67,8,78,98]
const arrayFirst = [32,36,5,76,57]

for(let i = 0 ; i = (array.length - arrayFirst.length); i + 1){
    if(array.length < arrayFirst.length){
        array.push(Number.parseInt(Math.random()* 100))
    }
    else if (array.length > arrayFirst.length){
        arrayFirst.push(Number.parseInt(Math.random()* 100))
    }
}
console.log(array, arrayFirst)