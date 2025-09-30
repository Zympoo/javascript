/* Print getallen die een patroon volgen (1,2,4,8,..., 100) */

let limiet = parseInt(prompt("Geef een limiet in."))

for(let i = 1; i <= limiet; i*=2) {
    console.log(i);
}