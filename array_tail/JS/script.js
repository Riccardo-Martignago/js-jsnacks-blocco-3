const email = prompt('Inserisci la tua email')
const listaEmail = ['cribbio@speedy.com', 'capperosottoaceto80@frittella.nt', 'calamarofritto43@griglia.up']
if (listaEmail.includes(email)){
    console.log('Puo accedere alla pagina!')
}
else{
    console.log("Non puo accedere alla pagina, l'email non corrisponde a un email valida!")
}