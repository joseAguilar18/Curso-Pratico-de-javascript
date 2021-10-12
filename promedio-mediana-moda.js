function calcularMediaAritmetica(array){
    //forma 1
    // let sumarArray = 0;
    // for(let i = 0; i < array.length; i++ ){
    //     sumarArray = sumarArray + array[i];
    // }

    //forma 2
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

// let arreglo = [14,25,1,2,3,5];

// function ordenarArreglo(a){
//     for(let i = 0; i < a.length; i++){
//         for(let j = 0; j < a.length; j++){
//             let temp = a[j];
//             if(a[i] < a[j]){
//                 a[j] = a[i];
//                 a[i] = temp;
//             }
//         }
//     }
//     console.log(arreglo);
// }

function ordenarArreglo2(a){
    a.sort(function(a,b){
        return a - b;
    })
    console.log(a);
}

function calcularMediana(array){
    array.sort((a,b)=>a-b);

    const mitad = parseInt(array.length / 2);
    
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