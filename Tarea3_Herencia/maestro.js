class Maestro {
    constructor(name) {
        this.name = name
        this.antiguedad = true
        this.edad = 0
    }
    
    speak() {
        
    }
}

class mMusica extends Maestro {
    constructor(name) {
        let s = super(name)
        s.legs = 2
        this.limpio = false
    } 
    
    bath() {
        this.limpio = true
        this.piojos = 0
    }
    
    speak() {
        console.log("Hola como estas")
    }
}