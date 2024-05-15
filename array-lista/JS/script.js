const myNumber = Number.parseInt (Math.random() * 6 + 1)
const pcNumber = Number.parseInt (Math.random() * 6 + 1)
if(myNumber === pcNumber){
    console.log("Un pareggi non é contemplato, ricarica la pagina!")
    console.log(myNumber,  pcNumber)
}
else if (myNumber > pcNumber){
    console.log("L'uomo ha vinto sulla macchina!")
    console.log(myNumber,  pcNumber)
}
else{
    console.log("Le macchine sono piu forti!")
    console.log(myNumber,  pcNumber)
}