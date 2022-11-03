


// let buttonHtml = document.getElementById('button-html');
 
// //la funzione setTimeout fa partire un blocco di codice dopo un certo tempo 
// //al posto di mettere function e la funzione dentro le graffe, creo una funzione da passare nel parametro function 

// //let prova = setTimeout(function(){},2000)


// //versione con function richiamata nel parametro 
// //let prova = setTimeout(saluta,2000);


// function saluta(){
//     alert ('ciao'); 
// }

// //con l'event listener metto "in ascolto" il bottone "button-html"
// //il corpo della funzione partirà al click
// buttonHtml.addEventListener('click' , function(){
// //versione con function richiamata nel parametro 

// let prova = setTimeout(saluta,2000);

// })




//prova di time

// let prova = setTimeout(displayNone,2000);

//  function displayNone(){
//     array.classList.add("display-none");
// }





// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//crea un array vuoto di numeri
//crea funzione numeri casuali
//crea 5 numeri casuali con un ciclo
//pushali nell'array
//visualizzali in pagina 
//fai partire un timer di 30 secondi 
//chiedi all'utente di inserire 5 numeri(con un ciclo) di quelli che si ricorda 
//questi numeri verranno pushati in un array
//vedere se i numeri inseriti dall'utente sono preseti nell'array 
//( "includes()")niziale se si ,incrementare di uno un counter punteggio 
//i numeri giusti finiscono in un array 


//variabili globali:

//numeri casuali
let arrayNumber = [];

// numeri utente
let numeriUtente = [];
//richiamo id dell'h2 di html

const numbersHtml = document.getElementById('numbers');





//funzione numeri casuali

function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}



//ciclo che crea 5 numeri casuali
for(let i=0; i<5 ; i++){
    //la variabile numeroCasuale deve stare dentro al ciclo perchè sennò genererebbe un solo numero random che verrà pushato 5 volte nell'array.
    
    let numeroCasuale = randomNumber(0, 100);
   
    arrayNumber.push(numeroCasuale);
    //chiedere +=
    numbersHtml.innerHTML +=`  ${arrayNumber[i]}` ; 
}



//funzione temporizzazione
let prova = setTimeout(displayNone, 1000);


function displayNone() {
  // arrayNumber.classList.add('blue');
  numbersHtml.innerHTML = "";
    
}



//ciclo di prompt da pushare in un array

for (k=0 ; k<5 ; k++){
let inserisci = parseInt(prompt('inserisci 5 un numeri:'));
numeriUtente.push(inserisci);


}
numbersHtml.innerHTML += `i tuoi numeri sono ${numeriUtente}`;
console.log( numeriUtente);





































  










