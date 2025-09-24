var berekening = 0

for(let i = 1; i <= 10; i++){
    let getal = parseInt(window.prompt("Geef je gegeven getal in."))
    berekening = berekening += getal;
}
console.log(berekening);