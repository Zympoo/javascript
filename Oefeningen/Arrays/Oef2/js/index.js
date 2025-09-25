let getallen = [2, 8, 3, 5, 1]
let grootsteGetal = 0;

for(let getal of getallen){
    if(getal >= grootsteGetal){
        grootsteGetal = getal;
    }
}
console.log(grootsteGetal);