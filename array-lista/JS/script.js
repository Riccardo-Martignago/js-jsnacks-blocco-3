const listFridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
listFridge.push ('pesca')
let find = "Oh no, devo uscire a comprare il cocomero!"
for(let i = 0; i < listFridge.length; i++){
    if('cocomero' === listFridge[i]){
        find = "Trovato! Devo solo preparare il cocktail."
    }
}
console.log(find)