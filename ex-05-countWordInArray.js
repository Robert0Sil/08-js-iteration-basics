
/**
 * countWordInArray()
 *
 * Write a function called `countWordInArray` that takes 2 inputs: a string, and an array.
 * The function should return a number that is equal to the number of times the string-argument
 * is found in the array.
 *
**/
function countWordInArray(word, arr){                 //Declaro función
  var newarr = []                                     //Declaro la variable del nuevo arreglo que se pretende obtener, si no se declara obtenemos un sólo valor del listado
  for(var i = 0; i < arr.length ; i++){               //Comienzo la busqueda componente por componente del arreglo (en este caso es sólo un listado pero puede ser una matriz)
    var list = arr[i]                                 //Declaro una variable que tomara el valor del componente que se esta analizando en ese momento

    if (word === list ){                              //Agrego la primera condición para filtrar los componentes
      newarr.push(list)                               //Agrego datos al nuevo arreglo
        //console.log(list)                           //verificando listado
    }
  }
  return newarr.length                                //Declaro el regreso del valor obtenido (necesario, de lo contrarío la maquina no sabe que valor es)
}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sentenceArray_1 = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', 'take', 'a', 'saw']
console.assert( countWordInArray('saw', sentenceArray_1) === 3)
console.assert( countWordInArray('take', sentenceArray_1) === 1)
console.assert( countWordInArray('brother', sentenceArray_1) === 1)
console.assert( countWordInArray('sister', sentenceArray_1) === 1)

var sentenceArray_2 = ["sister", "nancy", "take", 'the', 'first', 'right', 'and', 'take', 'the', 'third', 'left', 'on', 'sister', 'street']
console.assert( countWordInArray('take', sentenceArray_2) === 2)
console.assert( countWordInArray('brother', sentenceArray_2) === 0)
console.assert( countWordInArray('sister', sentenceArray_2) === 2)
