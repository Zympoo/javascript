let getal = parseInt(prompt("Geen een getal in"))
let uitkomst = 1;

for(let i = getal; i > 0; i--){
    uitkomst *= i;
}
console.log(uitkomst);