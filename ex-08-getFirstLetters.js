
/**
 * getFirstLetters()
 *
 * Write a function called `getFirstLetters` that takes an array of strings
 * and returns another array of strings with only the first letter
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/
function getFirstLetters(arr){                         //Declaro función
  var newor = []                                       //Declaro la variable del nuevo arreglo que se pretende obtener, si no se declara obtenemos un sólo valor del listado
  //console.log(arr.length)                            //Verifico el número de caracteres (esto lo hice para verificar ya que se me estaba duplicando la palabra)
  //console.log(arr);                                  //Verifico que el arreglo
  for(var i = 0; i < arr.length ; i++ ){               //Comienzo la busqueda componente por componente del arreglo (en este caso es sólo un listado pero puede ser una matriz)
    var list = arr[i]                                  //Asigno una palabra a la variable
    var word = list[0]                                 //Asigno la primera letra de la palabra (string) anterior a otra variable
    newor.push(word)                                   //Agrego datos al nuevo arreglo
    //console.log(newor)                               //Verifico los datos agregados
  }
  return newor                                         //Declaro el regreso del valor obtenido (necesario, de lo contrarío la maquina no sabe que valor es)
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
let outputArray1 = getFirstLetters(['wow', 'milk', 'howdy', 'sweet', 'bye'])
console.assert( Array.isArray(outputArray1) === true )
console.assert( outputArray1[0] === 'w')
console.assert( outputArray1[1] === 'm')
console.assert( outputArray1[2] === 'h')
console.assert( outputArray1[3] === 's')
console.assert( outputArray1[4] === 'b')



let outputArray2 = getFirstLetters(['kayak', 'chair', 'jacket', 'nice!'])
console.assert( Array.isArray(outputArray2) === true )
console.assert( outputArray2[0] === 'k' )
console.assert( outputArray2[1] === 'c' )
console.assert( outputArray2[2] === 'j' )
console.assert( outputArray2[3] === 'n' )
