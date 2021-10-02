//codigo del cuadrado
console.group("Cuadrados");

// const perimetroCuadrado = ladoCuadrado * 4;
function perimetroCuadrado (lado){
    return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();
//codigo del triangulo

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();


console.group("Circulo");




function perimetroCirculo(radio){
    return (radio * 2) * Math.PI;
}

function areaCirculo (radio){
    return Math.pow(radio,2) * Math.PI;
}

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("lado1");
    const lado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("lado2");
    const Lado2 = Number(inputLado2.value);

    const inputBase = document.getElementById("baseT")
    const base = Number(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, Lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo (){
    const inputBase = document.getElementById("baseT");
    const base = inputBase.value;

    const alruraInput = document.getElementById("alturaT");
    const altura = alruraInput.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const inputradio = document.getElementById("radio");
    const radio = inputradio.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputradio = document.getElementById("radio");
    const radio = inputradio.value;

    const area = areaCirculo(radio);
    alert(area);
}

function calcularAlturaIsoceles(){
    const inputLado1I = document.getElementById("lado1I");
    const lado1I = Number(inputLado1I.value);

    const inputLado2I= document.getElementById("lado2I");
    const lado2I = Number(inputLado2I.value);

    const inputbaseI = document.getElementById("baseI");
    const baseI = Number(inputbaseI.value);

    let altura = 0;
    let base2 = baseI / 2;
    if(lado1I == lado2I && baseI != lado1){
        altura = Math.sqrt((lado1I * lado2I) - Math.pow(base2,2))
        alert("El altura del Triangulo es: " + altura)
    }else{
        alert("El triangulo no es Isoceles, no tiene dos lados iguales.")
    }
}