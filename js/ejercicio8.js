/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10  Output: El 10 es divisible por 2.
input: 15 Output: El 15 no es divisible por 2.

*/
let numero1= parseInt(prompt("Ingrese un numero"));
if ( numero1 % 2 === 0)
{
    document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp; si es divisible por 2   </h1>");
}
else
{
    document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp; No es divisible por 2   </h1>");
}
