function isPalindroom(woord){
    let string = "";
    for(let i = woord.length - 1; i >= 0; i--){
        string += woord.charAt(i);
    }
    return woord === string;
}

//programma
let woord = window.prompt("Geef een woord in.")

document.querySelector("#resultaat").innerHTML =
    isPalindroom(woord)
/*if*/      ? `${woord} is een palindroom`
/*else*/    : `${woord} is geen palindroom`;
