/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/
function removeVowels(word){                          //Declaro función
  var newor = []                                      //Declaro la variable del nuevo arreglo que se pretende obtener, si no se declara obtenemos un sólo valor del listado
  //console.log(word.length)                            //Verifico el número de caracteres (esto lo hice para verificar ya que se me estaba duplicando la palabra)
  var words = word.toLowerCase()                      //Comvierto el string en minusculas (Para evitar la fatiga)
  //console.log(words);                                 //Verifico que el string esté en minusculas
  for(var i = 0; i < words.length ; i++){             //Comienzo la busqueda componente por componente del arreglo (en este caso es sólo un listado pero puede ser una matriz)
    var list = words[i]                               //Declaro una variable que tomara el valor del componente que se esta analizando en ese momento
    //console.log( words[i]  + '-' + i)                 //Vuelvo a Verifico el número de caracteres (esto lo hice para evitar que se me volviera a presentar el problema de duplicidad con las condiciones)

    if ('a' !== list && 'e' !== list && 'i' !== list && 'o' !== list && 'u' !== list){    //Agrego la primera condición para filtrar los componentes
      newor.push(list)                                //Agrego datos al nuevo arreglo
      //console.log(newor)                              //Verifico los datos agregados
      var neword = newor.join('')                     //Convierto el arreglo en string
      //console.log(neword)                             //Verifico el nuevo string
    }
  }
  return neword                                       //Declaro el regreso del valor obtenido (necesario, de lo contrarío la maquina no sabe que valor es)
}


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
