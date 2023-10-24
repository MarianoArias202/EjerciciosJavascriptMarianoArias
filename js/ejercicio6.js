/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande
*/

 let numero1= parseInt(prompt("Ingrese un numero"));
let numero2= parseInt(prompt("Ingrese un numero"));

if (numero1>numero2)
{
    document.write("<h1>el numero mayor es " + numero1+ "</h1>");
}
else
{
    document.write("<h1>el numero mayor es " + numero2+ "</h1>");
}
