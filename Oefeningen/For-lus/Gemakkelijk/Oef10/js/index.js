var getal = parseFloat(window.prompt("Geef je gegeven getal in."))
var berekening = 1;

for(let i = 1; i <= 10; i++){
    berekening = i * getal;
    console.log(berekening);
}