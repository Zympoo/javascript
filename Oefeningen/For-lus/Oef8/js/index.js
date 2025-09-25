let getal = parseInt(window.prompt("Geef een getal in."))

for(let i = 1; i <= getal;){
    if(i * 2 <= getal){
        console.log(i)
    }
    i *= 2;
}