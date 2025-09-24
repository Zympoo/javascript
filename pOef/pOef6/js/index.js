/* Je vraagt aan de gebruiker om een zijde om te zetten naar volume. **/
var zijde = parseFloat(window.prompt("Geef een zijde in."));
var volume = zijde ** 3;

alert(`Volume van de kubus is ${volume} als de zijde ${zijde} is`);