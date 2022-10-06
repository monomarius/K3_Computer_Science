function palindromo(palabra){
    var palabra1 = palabra.split("")
    var arregloVolteado = palabra1.reverse()
    var palabraVolteada = arregloVolteado.join("")
    console.log("La palabra original es:", palabra)
    console.log("La palabra volteada es:", palabraVolteada)
    if (palabraVolteada === palabra){
        console.log("La palabra", palabra, "si es palindrome")
    }
    else{
        console.log("La palabra", palabra, "no es palindrome")
    }
}
palindromo("cococ")


