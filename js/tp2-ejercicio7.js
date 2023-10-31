/*
7- Haz un script que escriba una pirámide inversa de los números 
del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

let  numero= prompt("Introduce un numero no mayor a 50");

if (Number(numero) == numero) {

    if (numero > 0 && numero <= 50) {
        let repetidor
        let contador
        for (contador = numero; contador >= 1; contador--) {
        
            for (repetidor = contador; repetidor >= 1; repetidor--) {
                document.write(contador);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("el numero es erroneo");
    }
} 
else {
    alert("no ha intoducido un numero");
}