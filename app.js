var opcion=parseInt(prompt("Ingrese la opcion \n" + "1. Sumar \n" + "2. Restar\n" + "3. Multiplicar\n"+ 
							"4. Dividir\n" + "5. Residuo\n" + "6. Comparar\n"
	));

if (opcion>0 && opcion<7) {

var numero1= parseInt(prompt("Ingrese el PRIMER numero: "));
var numero2= parseInt(prompt("Ingrese el SEGUNDO numero: "));


var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var residuo = numero1 % numero2;


switch (opcion) {
	case 1 : window.alert("La suma es:" + suma);
			break;

	case 2 : window.alert("La resta es : " + resta);
			break;

	case 3 : window.alert("El producto es : " + multiplicacion);
			break;

	case 4 : window.alert("La division es : " + division);
			break;

	case 5 : window.alert("El residuo es : " + residuo);
			break;

	case 6 : if (numero1 > numero2 ) {
				window.alert(numero1 + " es MAYOR que" + numero2);
				}
			else if (numero1 < numero2 ) { 
				window.alert(numero1 + "en MENOR que" + numero2);
				}
			else {
				window.alert(numero1 + "es IGUAL que" + numero2);
			}
			break;
  }
 } 
	else window.alert("Ingrese una opcion correcta ");

