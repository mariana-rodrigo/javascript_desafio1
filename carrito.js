function alCargarLaPagina() {
    const carritoGuardado = localStorage.getItem("carrito")
    const carrito = JSON.parse(carritoGuardado);
    console.log(carrito);


    const listaDeProductos = document.createElement("ul");
    elDivDelCarrito = document.getElementById("elDivDelCarrito");
    elDivDelCarrito.appendChild(listaDeProductos);

    for (let i = 0; i < carrito.length; i++) {
        const liDelCarrito = document.createElement("li");
        liDelCarrito.innerHTML = `Nombre: ${carrito[i].nombre} - Precio por Kilo: $${carrito[i].precioPorKilo} - Precio total por cantidad solicitada: $${carrito[i].precioTotalporTorta}`;
        listaDeProductos.appendChild(liDelCarrito);
        
    }
    

}


alCargarLaPagina();

