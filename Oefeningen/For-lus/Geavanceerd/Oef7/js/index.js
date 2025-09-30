// Print fibonacci-reeks tot aan gegeven limiet

let limiet = parseInt(prompt("Geef een limiet in"))
let a = 1, b = 1;

for(let i = 3; i <= limiet; i++) {
    if(a <= 10){
        console.log(a);
        let volgende = a + b;
        a = b;
        b = volgende;
    }
}