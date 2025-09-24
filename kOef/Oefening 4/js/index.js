var getal1 = parseFloat(window.prompt("Geef getal 1 in."));
var getal2 = parseFloat(window.prompt("Geef getal 2 in."));

if(getal1 > getal2){
    alert("Getal 1 is groter dan getal 2.");
}
else if(getal1 === getal2){
    alert("Getal 1 is gelijk aan getal 2.");
}
else {
    alert("Getal 1 is kleiner dan getal 2.");
}