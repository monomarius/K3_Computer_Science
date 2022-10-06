// Clase alumno
class Alumno{
    constructor(nombre, apellido, calificacionFinal, inscrito){
        // Para usar prompts en HTML!!!!!
        // this.nombre = prompt("Nombre")
        // this.apellido = prompt("Apellido")
        // this.calificacionFinal = prompt("Calificación Final")
        // this.inscrito = prompt("Inscrito")
        this.nombre = nombre
        this.apellido = apellido
        this.calificacionFinal = calificacionFinal
        this.inscrito = inscrito
    }
// Métodos del objeto
    getNombre(){
    return console.log(`El nombre de este alumno es: ${this.nombre}`)
    }

desincribir(){
    this.inscrito = false
    }

asignarAsesor(nombreAsesor){
    this.asesor = nombreAsesor
    }

    getInitials(){
        return console.log(this.nombre.charAt(0),this.apellido.charAt(0))
    }

    getNombreCompuesto(){
        return console.log(this.nombre,this.apellido)
    }

    getAverage(Materia1, Materia2, Materia3){
        this.average = average(nombreMateria1)
    }

}

let mario = new Alumno("Mario", "Bedolla", 99, true)

mario.asignarAsesor("Alex")
mario.getNombre()
mario.desincribir()
console.log(mario)
mario.getInitials()
mario.getNombreCompuesto()
mario.getAverage(9,9,9)
