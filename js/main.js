/*console.log("ciao");*/

let kmDaPercorrere = parseInt (prompt ("inserisci il numero di kilometri da percorrere"));


let eta = parseInt (prompt("inserisci la tua età"));
/*console.log (` l'utente dichiara l'età ${eta} `);*/

let sconto20 = ( 0.21 * 0.8) ;
let risultato20 = sconto20.toFixed(2);

let sconto40 = ( 0.21 * 0.6 );
let risultato40 = sconto40.toFixed(2);

/*
console.log (risultato20);
console.log (risultato40);
*/

if ( eta < 18 ){
    
    let prezzo18 = ( kmDaPercorrere * risultato20 );
    let risultato18 = Number (prezzo18.toFixed(2));
    alert (`il tuo prezzo già scontato per under 18 è: ${risultato18.toFixed(2)} €`);
}
else if ( eta > 17 && eta < 65 ) {
    let prezzoStandard = ( kmDaPercorrere * 0.21 );
    let risultatoStandard = Number (prezzoStandard.toFixed(2));
    alert (`il tuo prezzo finale è: ${risultatoStandard.toFixed(2)}€`);
} 
else {
    let prezzo65 = ( kmDaPercorrere * risultato40 );
    let risultato65 = Number (prezzo65.toFixed(2));
    alert (`il tuo prezzo già scontato per over 65 è: ${risultato65.toFixed(2)}€`);
}
