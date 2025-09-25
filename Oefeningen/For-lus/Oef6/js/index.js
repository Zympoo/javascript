let string = window.prompt("Vul een woord in.").toLowerCase();
let letter = window.prompt("Welke letter wil je dat er geteld word.").toLowerCase();
let teller = 0;

for(let i = 0; i <= string.length; i++){
    if(letter === string.charAt(i)){
        teller++
    }
}
console.log(`De letter "${letter}" komt ${teller} keer voor in het woord.`)