var teller = parseInt(window.prompt("Tot welke getal moet het lopen?"))
var berekening = 0;
for(let i = 1; i <= teller; i++) {
    berekening += i;
    console.log(`${berekening} (${i}/${teller})`);
}