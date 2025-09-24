/* Ben je zelfstandige , arbeider, bediende of ambtenaar **/
var keuze = parseInt(window.prompt("Ben je een zelfstandige (1), arbeider (2), bediende (3) of ambtenaar (4)?"));

switch(keuze){
    case 1:
        alert("Werkt zeer veel");
        break;
    case 2:
        alert("Werkt te veel");
        break;
    case 3:
        alert("Werkt");
        break;
    case 4:
        alert("Duh")
        break;
    default:
        alert("Fout")
}
