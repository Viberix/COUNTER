// Ottieni gli elementi dalla pagina
const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Inizializza il valore del counter
let counterValue = 0;

// Funzione per aggiornare il valore del counter
function updateCounter() {
  counter.textContent = counterValue;
}

// Aggiungi gli event listener ai pulsanti
incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});
