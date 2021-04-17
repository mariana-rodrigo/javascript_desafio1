let torta;
let cantidad;

function solicitarTortaYCantidad (){
    torta =  prompt("Cuál de las siguientes tortas quieres ordenar: Lemon Pie - Cabsha - Rogel");
    cantidad = Number( prompt ("De cuántos kilos es la torta que deseas ordenar?"));
}
let precio;

function calcularTotal(cantidad, precio){
    let total = cantidad * precio;
    alert ("El total a pagar es "+ total);
}
solicitarTortaYCantidad();
if (torta ==="Lemon Pie"){
    precio = 300;
    calcularTotal(cantidad, precio);
} else if ( torta === "Cabsha"){
    precio = 200;
    calcularTotal(cantidad, precio);
} else if (torta === "Rogel"){
    precio = 500;
    calcularTotal(cantidad, precio);
} else {
    alert ("Opción incorrecta");
    solicitarTortaYCantidad();
}

