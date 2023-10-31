/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
 Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
Ejercicios con Math
*/


let contador
let contador2
 

let filas = Number(prompt("Introduce numero de filas"));

let columna = Number(prompt("Introduce numero de columnas"));

let resultado = filas * columna;

document.write("<table border>");

for (contador = 0; contador < filas; contador++) {

    document.write("<tr>");

    for (contador2 = 0; contador2 < columna; contador2++) {

        document.write("<td>");

        document.write(resultado);

        resultado--;

        document.write("</td>");
    }

    document.write("</tr>");
}

document.write("</table>");