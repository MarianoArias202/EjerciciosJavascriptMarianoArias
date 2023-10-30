/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20  Output: El 20 es divisible por 2.
*/

let numero1= parseInt(prompt("Ingrese un numero"));

if ( numero1 % 2 === 0 || 
     numero1 % 3 === 0 ||
     numero1 % 5 === 0 || 
     numero1 % 7 === 0 ) 
{
    document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp; si es divisible por 2, 3, 5 o 7   </h1>");
}
else
{
    document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp; No es divisible por 2,3 5 o 7   </h1>");
}