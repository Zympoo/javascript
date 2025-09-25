let getalFaculteit = parseInt(window.prompt("Van welk getal wil je de faculteit zien."))
let uitkomst = 1;

while(getalFaculteit >= 1){
    uitkomst *= getalFaculteit
    getalFaculteit--
}
console.log(uitkomst)