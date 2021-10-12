const salarios = honduras.map(
    function(salario){
        return salario.salary;
    }
);

salarios.sort(
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

console.log(salarios);
console.log(mediana(salarios));