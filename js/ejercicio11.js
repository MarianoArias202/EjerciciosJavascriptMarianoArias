/*
11.- Añadir al ejercicio anterior que nos diga por cuál de 
los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20         Output: El 20 es divisible por 2 y por 5. 
input: 210        Output: El 210 es divisible por 2, por 3, por 5 y por 7.
 */
let numero1= parseInt(prompt("Ingrese un numero"));

if ( numero1 % 2 === 0 || 
     numero1 % 3 === 0 ||
     numero1 % 5 === 0 || 
     numero1 % 7 === 0 ) 
{
    if (numero1 % 2 === 0) 
    {
        document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp;  es divisible por 2</h1>");
    }
    if (numero1 % 3 === 0) 
    {
        document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp;  es divisible por 3</h1>");
    }
    if (numero1 % 5 === 0) 
    {
        document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp;  es divisible por 5</h1>");
    }
    if (numero1 % 7 === 0) 
    {
        document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp;  es divisible por 7</h1>");
    }

}
else
{
    document.write("<h1>El numero&nbsp; " + numero1  + "&nbsp; No es divisible por 2,3 5 o 7   </h1>");
}