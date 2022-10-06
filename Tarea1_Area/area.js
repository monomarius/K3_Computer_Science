var fig = document.getElementById('figurasGeometricas');
console.log(fig);
var figura = fig.value;
console.log(figura);

var figuras = 'cuadradro';

var lado1 = document.getElementById('lado');
var altura1 = document.getElementById('altura');
var lado2 = lado1.value;
var altura2 = altura1.value;


function calculate() {
    area.innerHTML = lado2 * altura2;
    console.log(lado2);
    console.log(altura2);
}

var button = document.getElementById("calcular");
button.onclick = calculate();


if(figuras == 'cuadradro'){
    area = lado2 * altura2
}
console.log(area)
console.log('Introduce lado de cuadrado')
area.innerHTML = area;
s
function  obenerDimensiones(figuras){
    if(figuras == 'cuadrado'){
        console.log('Introduce lado de cuadrado')
    }
}
