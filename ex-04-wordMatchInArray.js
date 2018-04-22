
/**
 * wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/

function wordMatchInArray(word, arr){                 //Declaro función
  for(var i = 0; i < arr.length ; i++){               //Comienzo la busqueda componente por componente del arreglo (en este caso es sólo un listado pero puede ser una matriz)
    //console.log(arr)                                //verificando listado
    if (arr.indexOf(word) >= 0 ){                     //Agrego la primera condición para filtrar los componentes
      return true
    }else {                                           //Agrego una segunda condición
      return false
    }
  }
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]

console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)
