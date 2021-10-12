let cupones = {
    JE_AR: 10,
    MAR_C: 15,
    XRL8: 20
}

function calcularDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return PrecioConDescuento;
}

function cupon(precioDescuento, cuponValue){
        const cuponDes = cupones[cuponValue] ;
        const precioCupon = calcularDescuento(precioDescuento, cuponDes);        
    return precioCupon;
}

function precioFinal(){
    const precioValue = document.getElementById("inputPrecio").value;
    const descuentoValue = document.getElementById("inputDescuento").value;
    const precioDescuento = calcularDescuento(precioValue, descuentoValue);
    
    const resul = document.getElementById("Resultado");  
    resul.innerText = "El Precio con Descuento es: " + precioDescuento + " Lps";
    
    const cuponValue = document.getElementById("input-cupon").value;
    const resulCupon = document.getElementById("ResultadoCupon");
    if(cuponValue != "" ){    
        const precioDescuentoCupon = cupon(precioDescuento, cuponValue);
        resulCupon.innerText = "El Precio con Descuento + cupon es: " + precioDescuentoCupon + " Lps";
    } else{
        resulCupon.innerText = "No posee descuento por cupon";
    }  
 
}



