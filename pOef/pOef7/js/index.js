/* Je vraagt 3 getallen aan de gebruiker en als antwoord wil je het gemiddelde van de drie. **/
var getal1 = parseFloat(window.prompt("Geef getal 1 in."));
var getal2 = parseFloat(window.prompt("Geef getal 2 in."));
var getal3 = parseFloat(window.prompt("Geef getal 3 in."));
var gemiddelde = (getal1 + getal2 + getal3) / 3;

alert(`Het gemiddelde van de drie getallen is ${gemiddelde}.`);
