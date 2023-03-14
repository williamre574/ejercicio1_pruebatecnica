
function esPrimo(numero) { //hacemos una funcion y le pasamos un parametro que se llama numero
    for (let i = 2; i < numero; i++) { //definimos un for donde se ejecutara hasta numero sea menor que dos
      if (numero % i === 0) { // hacemos una sentencia donde verificamos que el numero no sea divisible a ningun numero menor a el
        return false;
      }
    }
    return true;
  }
  
  let contador = 0; //declaramos las variables
  let numero = 2;
  
  while (contador < 10) { 
    if (esPrimo(numero)) {
        
      console.log(numero);
      contador++;   
    }
    numero++;
  }