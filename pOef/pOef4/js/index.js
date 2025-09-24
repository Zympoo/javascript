/* Je vraagt aan de gebruiker om een kilometer om te zetten naar meters. **/
var kilometer = parseFloat(window.prompt("Geef aantal kilometer in."));
var meter = kilometer * 1000;

console.log(`${kilometer} km is ${meter} km.`);