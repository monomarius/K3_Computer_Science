function temperatura(gradosF){
gradosC = (gradosF -32) * .5556
gradosC = gradosC.toFixed(2)
console.log(gradosC)
}

temperatura(80)