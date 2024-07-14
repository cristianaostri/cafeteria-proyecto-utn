
console.log("Empezando los ejercicios")
/* Ejericio 1

Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avion
*/

/*
recorridoHecho = parseInt(prompt('Coloca la distancia que vas a recorrer'))

if(recorridoHecho > 0  && recorridoHecho< 120){
    console.log("Es mejor recorrer a pie");
}
else if(recorridoHecho >= 1000  && recorridoHecho < 10000){
    console.log("Es mejor recorrer en bicicleta");
}
else if(recorridoHecho >= 10000  && recorridoHecho < 30000){
     console.log("Es mejor recorrer en colectivo");
}
else if(recorridoHecho >= 30000 && recorridoHecho < 100000 ){
    console.log("Es mejor recorrer en auto");
}
else if(recorridoHecho >= 100000  ){
    console.log("Es mejor recorrer en avion");
}

elMayor = parseInt(prompt('Escriba su aray'))

*/
/*
Ejericio 2

Crear el código que reciba como parámetro un array de números y devuelva el mayor.
*/

function obtenerNumeros() {
    let array = [];
    let numero;

    while (true) {
      numero = prompt("Proponga la cantidad de números que quiera en un array. Para cortar coloque 0");
      
      if (numero === null || numero === "0") {
        break;
      }
      
      numero = Number(numero);
      
      if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        continue;
      }
      
      array.push(numero);
    }
    
    return array;
  }

  function numeroMaximo(array) {
    if (array.length === 0) {
      return "No se ingresaron números.";
    }

    let maximo = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maximo) {
        maximo = array[i];
      }
    }
    return maximo;
  }

  function iniciar() {
    const numeros = obtenerNumeros();
    if (numeros.length === 0) {
      alert("No se ingresaron números.");
    } else {
      const maximo = numeroMaximo(numeros);
      alert("El número mayor es: " + maximo);
    }
  }
  iniciar()