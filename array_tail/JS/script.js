const array = []
const numberEl = Number.parseInt(prompt('Quanti elementi devo essere presenti nella lista?'))
for(i = 0; i < numberEl; i++){
    array.push (Number.parseInt(Math.random()* 101 + 1))
}
console.log(array.slice(-5))