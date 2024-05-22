//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10
//Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

const palla = {
    'Nome' : 'palla',
    'Peso' : '10'
}
console.log(palla)
palla.peso = Number.parseFloat((prompt('Inserisci il peso della palla')), 10);
if(palla.peso < 10){
    palla.peso = 10
    console.lo("Il peso inserito non rispetta i requisiti minimi")
}

console.log(palla, palla.peso)