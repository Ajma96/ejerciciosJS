/*
 * Los argumentos 0 y 1 son la propia llamada a node y el nombre del archivo, por lo que nos interesa que se ejecute solo cuando exista el argumento2
 * (primer parámetro que se le pasa a la función)
 */

/*
 * for ( var i = 0 ; i < process.argv.length ; i ++ ) {
 *	console.log( 'Argumento ' + i + ': ' + process.argv[i] );
 * }
 */

if ( process.argv.length < 3 ) {
	process.exit( 1 );
}

console.log( 'Cadena leída: ' + process.argv[2] );
const cadena = process.argv[2];

function procesarCadena( valorCadena ) {
	var _cadena = valorCadena;
	// Todo lo que se defina aquí es privado
	return {
		longitudCadena : function() { return _cadena.length;                          } ,
		cadenaEsNumero : function() { return !( isNaN( _cadena ) );                   } ,
		cadenaEnMayus  : function() { return _cadena.toUpperCase();                   } ,
                alReves        : function() { return cadena.split( '' ).reverse().join( '' ); } ,
		esPalindromo   : function() { return _cadena === this.alReves();              }
	};
}

const cadena1 = procesarCadena( cadena );

console.log( 'Longitud de la cadena: ' + cadena1.longitudCadena() );
console.log( '¿Es un número? -> '      + cadena1.cadenaEsNumero() );
console.log( 'Cadena en mayúscula: '   + cadena1.cadenaEnMayus()  );
console.log( 'La cadena al revés es: ' + cadena1.alReves()        );
console.log( '¿Es un palíndromo? -> '  + cadena1.esPalindromo()   );
