class Electrodomestico{
    constructor(precio, color, capacidad){
        this.precio = precio
        this.color = color
        this.consumoEnergetico = 100
        this.capacidad = capacidad
    }
    precioFinal(){
       return this.cargaKg * this.consumoEnergetico
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, cargaKg){
    super (precio, color, capacidad)
    this.cargaKg = cargaKg
    }
}

let lavadora1 = new Lavadora(7000, "gris", 5, 3)
console.log(lavadora1.precioFinal())