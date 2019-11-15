
// messaggio di Benvenuto
alert('Benvenuto nel gioco dei dadi');
 var num_utente = prompt('digita un numero da 1 a 6');
// for per verificare se il numero è corretto

for (var i = 1; num_utente<1 || num_utente>6 ; i++){

 if (num_utente<1 || num_utente>6) {
     console.log('Oops hai digitato un numero non compreso tra 1 e 6. Riprova');
      num_utente = prompt('digita un numero da 1 a 6');
 }
 }

console.log('il tuo numero è: ' + num_utente);

// numero random del computer
console.log('il computer sta lanciando il dado:');

var num_computer = Math.floor(Math.random() *6) + 1;

console.log('il computer ha ottenuto il numero: ' + num_computer);


if(num_computer > num_utente) {
    console.log('Hai perso!');
} else if (num_computer < num_utente){
    console.log('Hai Vinto!!!');
} else{
    console.log('Avete pareggiato.');
}
