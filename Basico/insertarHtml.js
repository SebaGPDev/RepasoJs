document.write(concatenar)

var datos = document.getElementById("datos");
datos.innerHTML = concatenar;

var datos = document.getElementById("datos").innerHTML = concatenar; 

//Insertar en HTML

var datos = (document.getElementById(
    "datos"
  ).innerHTML = `<h1>Bienvenido al curso de ${curso}</h1><br><p>El precio de este curso es de : $ ${precio}</p>`);
  
  usuario = prompt('Cual es su profesion: ')
  usuarios = document.getElementById("usuario").innerHTML=`${usuario}`
