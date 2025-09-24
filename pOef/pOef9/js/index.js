/* Ben je zelfstandige , arbeider, bediende of ambtenaar **/
var werkgelegenheid = (window.prompt("Ben je een zelfstandige, arbeider, bediende of ambtenaar?")).toLowerCase();
var juist = 0;

if(werkgelegenheid === "zelfstandige"){
    alert("Werkt zeer veel")
}
else if(werkgelegenheid === "arbeider"){
    alert("Werkt teveel")
}
else if(werkgelegenheid === "bediende"){
    alert("Werkt")
}
else if(werkgelegenheid === "ambtenaar"){
    alert("Duh")
}
else{
    alert("Fout, probeer opnieuw")
}
