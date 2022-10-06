class Bebida{
    constructor(cantidad, marca, precio, tipoBebida){
        this.cantidad = cantidad
        this.marca = marca
        this.precio = precio
        this.tipoBebida = tipoBebida
    }
}

class Refresco extends Bebida{
    constructor(cantidad, marca, premio){
        super(cantidad, nombre, precio, "Gaseosa")

    }
}
