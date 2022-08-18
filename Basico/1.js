//Variables

var nombre = "Sebastian Prieto";
var edad = 20;

var concatenar = nombre + " " + edad;

var curso = "Desarrollo Web";
var precio = 1000;

// document.write(concatenar)

/* var datos = document.getElementById("datos");
datos.innerHTML = concatenar; */

/* var datos = document.getElementById("datos").innerHTML = concatenar; */

//Insertar en HTML

var datos = (document.getElementById(
  "datos"
).innerHTML = `<h1>Bienvenido al curso de ${curso}</h1><br><p>El precio de este curso es de : $ ${precio}</p>`);

usuario = prompt('Cual es su profesion: ')
usuarios = document.getElementById("usuario").innerHTML=`${usuario}`

altura =  parseInt(prompt('Cual es tu altura: '))

//Estructuras de control
if (altura > 180 ) {

    document.getElementById("altura").innerHTML = ` Wow eres una persona alta`

} else {

    document.getElementById('altura').innerHTML = 'Tienes una altura Promedio'

}