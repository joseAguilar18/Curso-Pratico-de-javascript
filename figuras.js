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
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();

//codigo del circulo

console.group("Circulo");

//Radio
// const radioCirculo = 4
// console.log("El radio del circulo es: "+ radioCirculo +"cm");

//diametro
//const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio){
    return radio * 2;
}

//PI

//circunferencia
// const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(){
    return diametroCirculo(radio) * Math.PI;
}

//Area

// const areaCirculo = Math.pow(radioCirculo,2) * PI;
function areaCirculo (radio){
    return Math.pow(radio,2) * Math.PI;
}

console.groupEnd();


