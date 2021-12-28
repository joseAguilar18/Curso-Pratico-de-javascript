function obtenerDatos(){
    const datos = document.getElementById("data").value;
    const datosString = datos.split(",");
    const datosnum = [];

    for(let i = 0; i < datosString.length; i++){
        datosnum[i] = parseInt(datosString[i]);
    }
   
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
    //array.sort((a,b)=>a-b);
    
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
   
   return mediana;
}

function imprimirMediana(){
    let mediana = calcularMediana(obtenerDatos());    
    let resul = document.getElementById("mediana");
    resul.innerHTML = "La mediana es: " + mediana;
}

function imprimirPromedio(){
    let promedio = calcularMediaAritmetica(obtenerDatos());
    let resul = document.getElementById("promedio");
    resul.innerHTML = "El promedio es: " + promedio.toFixed(2); 
}

function imprimirModa(){
    const moda = calcularModa(obtenerDatos());
    let resul = document.getElementById("moda");
    resul.innerHTML = "La moda es: " + moda[0] + " con " + moda[1] + " repeticiones.";
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
    const aArreglo = Object.entries(objetoA).sort((a,b)=> a[1]-b[1]);    
    const moda = aArreglo[aArreglo.length - 1];
    console.log(moda);
    return moda;
}

function calcularMediaGeometica(a){
    const producto = a.reduce((a,b)=>a*b);

    const mediaGeometrica = Math.pow(producto,1/a.length);
    console.log(mediaGeometrica);
}