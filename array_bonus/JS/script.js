const array = []
for(let i = 0; i < 6; i++){
    let myNumber = Number.parseInt (prompt ('Digita un numero'))
    if(myNumber % 2 === 0){
        array.push(myNumber)
    }
    else{
        console.log('Questo numero é dispari', myNumber)
    }
}
console.log(array)