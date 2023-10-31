/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje 
que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/
let edad= prompt("Ingrese su edad");

if (!isNaN(edad)) {
    if ( edad >= 18) 
    {
        document.write("<h1>Excelente Usted ya puede conducir </h1>");
    }
    else
    {
    document.write("<h1>lo sentimos, todavia no tiene edad para conducir </h1>");
    }
  }
else
{
    document.write("<h1>ha ingresado un caracter no valido </h1>");
}

