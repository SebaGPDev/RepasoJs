//Objetos literales

var auto = {
    modelo: "Mercedes Clase A",
    velocidadMaxima: 500,
    antiguedad: 2019,
    mostrarDatos(){
        //console.log(modelo) asi da error
        console.log(this.Caracteristicas) // con this le digo al metodo mostrat datos que acceda a la propiedad de este objeto
    },
    Caracteristicas: "Auto Nuevo poco uso, sin detalles"
}

console.log(auto)

auto.mostrarDatos();