const carrito = [];

const losBotonesOrdenar = document.getElementsByClassName("botonOrdenar");

for (let i=0; i<losBotonesOrdenar.length; i++){
    losBotonesOrdenar[i].addEventListener('click', function (evento) {
        ordenarTorta2(i);
    })
}
function ordenarTorta2(nroDeTorta){
    let cantidad = Number(prompt("De cuántos kilos es la torta que deseas ordenar?"));
    const precioTorta = document.getElementsByClassName("precioTorta");
    let precioTotal = cantidad * Number(precioTorta[nroDeTorta].innerHTML.substring(1));
    alert("El total a pagar por esta torta es $" + precioTotal);
    carrito.push(precioTotal);

}
document.getElementById("botonFinalizarCompra").addEventListener('click', sumarCarrito)

function sumarCarrito(){
    let totalAPagar = 0;
    for (i=0; i<carrito.length; i++){
        totalAPagar = totalAPagar + carrito[i];
    }
    alert ("el total a pagar es $"+ totalAPagar);
}