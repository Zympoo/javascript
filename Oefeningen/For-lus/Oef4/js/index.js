let getalFaculteit = parseInt(window.prompt("Van welk getal wil je de faculteit zien."))
let uitkomst = 1;

for(let i = getalFaculteit; i >= 1; i--){
    uitkomst *= i;
}
console.log(uitkomst)