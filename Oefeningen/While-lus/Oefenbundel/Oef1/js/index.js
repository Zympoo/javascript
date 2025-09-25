let getal = 0;
let som = 0;

while(getal >= 0){
    getal = parseInt(window.prompt("Vul een nummer in die niet negatief is."))
    if(getal >= 0){
        som += getal;
    }
}
console.log(som);