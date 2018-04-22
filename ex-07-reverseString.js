
/**
 * reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/
function reverseString(word){                         //Declaro función
  var newor = []                                      //Declaro la variable del nuevo arreglo que se pretende obtener, si no se declara obtenemos un sólo valor del listado
  //console.log(word.length)                            //Verifico el número de caracteres (esto lo hice para verificar ya que se me estaba duplicando la palabra)
  var fin = word.length                               //Asigno el numero de caracteres a variable para conocer el último caracter
  //console.log(fin);                                   //Verifico el número del último caracter
  //console.log(word);                                  //Verifico que el string
  for(var i = 0; i <= word.length ; i++ ){            //Comienzo la busqueda componente por componente del arreglo (en este caso es sólo un listado pero puede ser una matriz)
    var t = fin - i                                   //Asigno el último valor y comienzo la resta para poder llegar hasta el principio, o sea, al cero
    var list = word[t]                                //Declaro una variable que tomara el valor del componente que se esta analizando en ese momento
    newor.push(list)                                  //Agrego datos al nuevo arreglo
    //console.log(newor)                                //Verifico los datos agregados
    var neword = newor.join('')                       //Convierto el arreglo en string
    //console.log(neword)                               //Verifico el nuevo string
  }
  return neword                                       //Declaro el regreso del valor obtenido (necesario, de lo contrarío la maquina no sabe que valor es)
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
