/*
3- Realiza un script que pida cadenas de texto  
hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let fraseCompleta = "";
do {
     let primeraFrase = prompt("Ingrese una frase")

if(fraseCompleta.length === 0)
{
    fraseCompleta += primeraFrase;
}else {
    fraseCompleta += "-" + primeraFrase;
}
}
while (confirm("¿Desea ingresar otra frase?"))

document.write(`<h1>La frase completa es:`);
document.write(`<h1 style="color: brown;">${fraseCompleta} </h1>`);
