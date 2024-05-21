// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

const time = prompt('Quanti secondi devo attendere?')
setTimeout(function(){
    console.log(time)
}, time)