/*
8- Crea script para generar pirámide siguiente con los números 
del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = prompt("ingrese un numero");

if (Number(numero) == numero) {

    if (numero > 0 && numero <= 50) {

        let repetidor
        let contador 

        for (contador = 0; contador <=numero; contador++) {

            for (repetidor = 1; repetidor <= contador; repetidor++) {
                document.write(repetidor);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("error no ha ingresado un numero valido");
    }
} 
else {
    alert("el valor ingresado no es un numero");
}