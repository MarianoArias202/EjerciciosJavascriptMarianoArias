/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande */

let numero1= parseInt(prompt("Ingrese un numero"));
let numero2= parseInt(prompt("Ingrese un numero"));
let numero3= parseInt(prompt("Ingrese un numero"));
let mayortemporal;
let mayor;

if (numero1>numero2)
{
    mayortemporal = numero1;
}
else 
{
    mayortemporal = numero2;
}

if (mayortemporal>numero3)
{
    mayor = mayortemporal;
    
}
else
{
    mayor = numero3
}
document.write("<h1>el numero mayor entre: <br> " + numero1 + 
                                           ", &nbsp;" + numero2 +
                                           ",  y " + numero3 +
                                            "&nbsp; es: &nbsp;" + mayor +
                                            "</h1>" );
