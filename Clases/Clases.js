class Auto {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad= velocidad;
        this.antiguedad = antiguedad;
    }
    aumentarVelocidad(){
        this.velocidad += 1;
    }
    reducirVelocidad(){
        this.velocidad -+ 1;
    }
}

var auto1 = new Auto('BMW', 300, 2015);
var auto2 = new Auto('Ford', 200, 2010);

console.log(auto1.velocidad)

auto1.aumentarVelocidad();

console.log(auto1.velocidad)