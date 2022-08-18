var saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    let saludo = "Hola Bienvenido";
    //saludo = false

    if (saludo) {
      resolve(saludo);
    } else {
      reject("No hay saludo disponible");
    }
  }, 1000);
});

saludar.then(resultado => {
    alert(resultado);
    
})
.catch(error => {
    alert(error);
})