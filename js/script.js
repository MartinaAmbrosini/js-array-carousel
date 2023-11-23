// Consegna: Creare un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico: l’html con tutto il necessario perchè funzioni il carosello.
// (Se su qualche parte del layout vedete che ci state perdendo troppo tempo tralasciate i dettagli e passate alla parte logica il prima possibile).

// MILESTONE 2
// Al click dell’utente sulle frecce (sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

const items = document.getElementsByClassName("item");
console.log(items)

let activeItem = 0;

// navigazione
const next = document.querySelector(".next");

next.addEventListener("click", function() {

    if (activeItem < items.length - 1) {
        // togliamo la classe active all'elemento corrente 
        items[activeItem].classList.remove("active");

        // incremento indice dell'elemento per andare all'elemento successivo
        activeElement++;

        // aggiungo classe active al prossimo elemento
        items[activeItem].classList.add("active");
    }

});

// seleziono back
const back = document.querySelector(".back");

// azioni al click del bottone back
back.addEventListener("click", function(){

    if(activeElement > 0){
        // tolgo classe active all'elemento precedente
        element[activeElement].classList.remove("active");

        // i meno incidono sull'elemento per andare all'elemento precedente 
        activeElement--;

        // aggiungo classe active all'elemento
        element[activeElement].classList.add("active");
    }
});