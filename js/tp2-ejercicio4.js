/* 
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
 
let suma = 0;

while (true) {
  let numeroingresado= prompt("Introduce un número:");
  if (numeroingresado === null) {
    break; 
  }
  let numero = parseInt(numeroingresado);

  if (isNaN(numero)) {
    alert("No es un número válido");
  }
   else 
  {
    suma = suma + numero; 
  }
}

document.write(`<h1>La suma de los numeros es: ${suma}`);