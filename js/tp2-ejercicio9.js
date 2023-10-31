/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 
y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

*/

let repetidor = 0;
let contador;

for (contador = 1; contador <= 500; contador++) {

    document.write(contador);
    if (contador % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    if (contador % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    document.write("<br>");
    if (contador % 5 == 0) {
        document.write("<hr>");
    }
}