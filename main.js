// Chiedi all'utente il cognome.
// Inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione nella lista in cui il nuovo utente si trova.


// Creo un erray con più cognomi
var listaCognomi= ["Forato", "De Biase", "Rossi", "Bianchi", "De Luca"];
console.log(listaCognomi);
// Chiedi all'utente il cognome
var cognomeUtente = prompt("inserisci il tuo cognome");
console.log(cognomeUtente);
// Inseriscilo in un erray con altri cognomi;
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);
// stampa la lista ordinata alfabeticamente
listaCognomi.sort();
console.log(listaCognomi);
// Scrivi anche la posizione nella lista in cui il nuovo utente si trova.
console.log(listaCognomi.length);
console.log(cognomeUtente.length);
