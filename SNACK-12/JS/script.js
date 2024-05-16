const parola = prompt ('Inserisci una parola')
const parolaDue = prompt ('Inserisci una parola')

if(parola.length == parolaDue.length){
    console.log(parola, parolaDue)
}
else if(parola.length > parolaDue.length){
    console.log(parola)
}
else{
    console.log(parolaDue)
}