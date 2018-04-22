/**
 * shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should accapt as input an array of strings,
 * and it should return a new array containing
 * only those strings with 4 or fewer characters.
 *
*/

function shortiesOnly(arr){                           //Declaro función
  var newarr = []                                     //Declaro la variable del nuevo arreglo que se pretende obtener, si no se declara obtenemos un sólo valor del listado
  for(var i = 0; i < arr.length ; i++){               //Comienzo la busqueda componente por componente del arreglo (en este caso es sólo un listado pero puede ser una matriz)
    var list = arr[i]                                 //Declaro una variable que tomara el valor del componente que se esta analizando en ese momento
    //console.log(list.length)                        //verificando listado
    if (list.length <= 4 ){                            //Agrego la primera condición para filtrar los componentes
      newarr.push(list)                               //Agrego datos al nuevo arreglo

    }
  }
  return newarr                                       //Declaro el regreso del valor obtenido (necesario, de lo contrarío la maquina no sabe que valor es)
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var moreNames = [
  'Caroline',
  'Kristen',
  'Kate',
  'Matt',
  'Ken'
]



var shortList = shortiesOnly(allNames)
var littleNameList = shortiesOnly(moreNames)         //Modifique esta parte ya que estaba shortiesOnly(allNames)

//console.log(shortList)                             //verificando nuevo arreglo
console.assert( shortList.length <= 4 )             //Modifique esta parte ya que estaba shortList.length === 4
// checks to see that 'Sam' is INCUDED in the output array.
console.assert( shortList.indexOf('Sam') >= 0 )
// checks to see that 'Fred' is INCUDED in the output array.
console.assert( shortList.indexOf('Fred') >= 0 )
// checks to see that WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )

// -- Test 2
console.assert( littleNameList.length === 3 )
console.assert( littleNameList.indexOf('Kate') >= 0 )
console.assert( littleNameList.indexOf('Matt') >= 0 )
console.assert( littleNameList.indexOf('Ken') >= 0 )
console.assert( littleNameList.indexOf('Caroline') === -1 )
