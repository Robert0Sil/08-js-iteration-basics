// ex-04 makeAcronym()

//
// Write a function called makeAcronym() that converts a name like Portable Network Graphics
// to its acronym (PDF).
//
// makeAcronym('PNG')
//  => 'PDF'
function makeAcronym(arr){                           //Declaro función
  var num = []                                       //Declaro la variable del arreglo que me dirá donde inician y teminan las palabras
  var newor = []                                     //Declaro la variable del nuevo arreglo que me separa las palabras, si no se declara obtenemos un sólo valor del listado
  var neww = []                                      //Declaro la variable del nuevo arreglo que me obtiene las iniciales o el acronimo, si no se declara obtenemos un sólo valor del listado
  //console.log(arr.length)                            //Verifico el número de caracteres (esto lo hice para verificar ya que se me estaba duplicando la palabra)
  var arr = arr.toUpperCase()                        //Comvierto el string en MAYUSCULAS (Para evitar la fatiga)
  //console.log(arr);                                  //Verifico el arreglo

  for(var i = 0; i < arr.length ; i++ ){             //Comienzo la busqueda componente por componente del arreglo (en este caso es sólo un listado pero puede ser una matriz)
    var list = arr[i]                                //Asigno una palabra a la variable
    if(list === " "){
      var n = i
      num.push(n)
      //console.log(n);

    }
    //console.log(num);
    //console.log(num.length);

  }
  var ff = num[0]
  var word = arr.slice(0, ff)
  newor.push(word)
  for(var m = 0; m < num.length; m++){
    var p = num[m]
    //console.log(p);
    var f = num[m + 1]
    //console.log(f);
    var words = arr.slice((p+1), f)
    newor.push(words)                                   //Agrego datos al nuevo arreglo
    //console.log(newor)                               //Verifico los datos agregados
  }
  for(var i = 0; i < newor.length ; i++ ){               //Comienzo la busqueda componente por componente del arreglo (en este caso es sólo un listado pero puede ser una matriz)
    var lis = newor[i]                                  //Asigno una palabra a la variable
    var wor = lis[0]                                 //Asigno la primera letra de la palabra (string) anterior a otra variable
    neww.push(wor)                                   //Agrego datos al nuevo arreglo
    //console.log(neww)                               //Verifico los datos agregados
    var acro = neww.join('')
  }

  return acro                                         //Declaro el regreso del valor obtenido (necesario, de lo contrarío la maquina no sabe que valor es)
}

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('Bring Your Own Beverage') === 'BYOB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )
console.assert( makeAcronym('Department of Defense') === 'DOD' )
console.assert( makeAcronym('in case you missed it') === 'ICYMI' )
console.assert( makeAcronym('if I recall correctly') === 'IIRC' )
console.assert( makeAcronym('Rest in Peace') === 'RIP' )



//Explorer Mode -- pass the argument a true/false value to
//                 capture prepositions or not.
// ---------------------------------------------------
// console.assert( makeAcronym('president of the United States', true) === 'POTUS' )
// console.assert( makeAcronym('greatest of all time', true) === 'GOAT' )
// console.assert( makeAcronym('earnings before insurance taxes depreciation and amortization', false) === 'EBITDA' )
// console.assert( makeAcronym('National Association for the Advancement of Colored People', false) === 'NAACP' )
