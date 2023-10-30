/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo  Output: oauo
 */
let frase = prompt("Escribe una frase");
let contadordecarcateres = frase.length;
let vocalesextraidas;
let i;

document.write("<p>las vocales extraidas son:</p>");
for (i = 0; i < contadordecarcateres; i++) {
if (frase.substr(i,1) === "a" || 
    frase.substr(i,1) === "e" || 
    frase.substr(i,1) === "i" || 
    frase.substr(i,1) === "o" || 
    frase.substr(i,1) === "u") 
{
    vocalesextraidas = frase.substr(i,1);
    document.write( vocalesextraidas);
}

}
