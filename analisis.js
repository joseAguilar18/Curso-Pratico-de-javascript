const salarios = honduras.map(
    function(salario){
        return salario.salary;
    }
);

const salariosOrdenados = salarios.sort(
    function(a,b){
        return a-b
    }
);
const mediaAritmetica = (array) => array.reduce((a, b) => a +b)/array.length;

function espar(a){
    if(a.length % 2 === 0){
        return true;
    };
}

//Mediana general de salarios
function mediana (a){
    const mitad = parseInt(a.length / 2);

    let mediana = 0;
    if(espar(a)){
        const mitadMediana1 = a[mitad];
        const mitadMediana2 = a[mitad - 1];
        mediana =  mediaAritmetica([mitadMediana1, mitadMediana2]);
        return mediana
    }else{
        return a[mitad];
    }
}

//Mediana del top 10%
const spliceStart = (salariosOrdenados.length * (100 - 10))/100;
const spliceCount = salariosOrdenados.length - spliceStart;

const medianaTop10 = salariosOrdenados.splice(spliceStart, spliceCount);

const medianaTop = mediana(medianaTop10);

console.log(salarios);
console.log(mediana(salariosOrdenados), medianaTop);