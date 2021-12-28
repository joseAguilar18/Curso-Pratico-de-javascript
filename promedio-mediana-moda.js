function obtenerDatos(){
    const datos = document.getElementById("data").value;
    const datosString = datos.split(",");
    const datosnum = [];
    for(let i = 0; i < datosString.length; i++){
        datosnum[i] = parseInt(datosString[i]);
    }
    console.log(datosnum);
    return datosnum;
}

function calcularMediaAritmetica(array){
  
    const sumarArray = array.reduce(
        function(valorAcumlado, nuevoElemento){
            return valorAcumlado + nuevoElemento;
        }
    )

    const mediaAritmetica = sumarArray / array.length;
    return mediaAritmetica;  
}

const mediaAritmetica = (array) => array.reduce((a, b) => a +b)/array.length;



//forma 3
const promedio = (array) => array.reduce((valorAnterior,valorActual) => valorAnterior + valorActual)/ array.length;

function esPar(array){
    if(array % 2 == 0){
        return true;
    }else{
        return false;
    }
}


function ordenarArreglo2(a){
    a.sort(function(a,b){
        return a - b;
    })
    console.log(a);
}

function calcularMediana(array){
    array.sort((a,b)=>a-b);

    console.log(array);

    const mitad = parseInt(array.length / 2);
    console.log(mitad);
    
    let mediana = 0;
   if(esPar(array.length)){
        const mitad1 = array[mitad];
        const mitad2 = array[mitad-1];
        mediana = calcularMediaAritmetica([mitad1, mitad2]);      
   }else{
        mediana = array[mitad];
   }
   console.log(mediana);
   return mediana;
}

function imprimirMediana(){
    let mediana = calcularMediana(obtenerDatos());    
    let resul = document.getElementById("mediana");
    resul.innerHTML = "La mediana es: " + mediana;
}

function calcularModa(a){

    const objetoA = {};

    a.map(
        function (numero){
            if(objetoA[numero]){
                objetoA[numero] += 1;
            }else{
                objetoA[numero] = 1;
            }
        }
    );
    console.log(objetoA)

    const aArreglo = Object.entries(objetoA).sort((a,b)=> a[1]-b[1]);
    console.log(aArreglo);
    const moda = aArreglo[aArreglo.length - 1];
    console.log(moda[0]);
}

function calcularMediaGeometica(a){
    const producto = a.reduce((a,b)=>a*b);

    const mediaGeometrica = Math.pow(producto,1/a.length);
    console.log(mediaGeometrica);
}