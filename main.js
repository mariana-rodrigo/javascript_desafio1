function ItemCarrito(nombre, precioPorKilo, precioTotalporTorta){
    this.nombre = nombre;
    this.precioPorKilo = precioPorKilo;
    this.precioTotalporTorta = precioTotalporTorta;
}

function ordenarTorta(nroDeTorta, botonOrdenar) {
    const inputParaIngresarLaCantidad = document.createElement('input');
    inputParaIngresarLaCantidad.setAttribute("type", "number");
    inputParaIngresarLaCantidad.setAttribute("class", "inputCantidad");
    botonOrdenar.parentElement.appendChild(inputParaIngresarLaCantidad);
}

function finalizarCompra(){ 
    const filasDeLaTabla = document.getElementsByTagName ('tr');
    const filasDeLaTablaArray = Array.from(filasDeLaTabla);
    filasDeLaTablaArray.shift();
    const carrito = [];
    for(let i=0; i<filasDeLaTablaArray.length;i++){
        const nombreTorta=document.getElementsByClassName ("nombreTorta");
        const nombreTortaElegida = nombreTorta[i].innerHTML;
        const precioTorta=document.getElementsByClassName ("precioTorta");
        const precioTortaElegida = precioTorta[i].innerHTML.substring(1);
        const cantidadElegida = document.getElementsByClassName("inputCantidad");
        const cantidadElegidaDeTorta = Number(cantidadElegida[i].value);
        const precioTotalPorTorta = cantidadElegidaDeTorta * Number(precioTortaElegida);
        const elItemQueEstoyAgregando = new ItemCarrito (nombreTortaElegida, precioTortaElegida, precioTotalPorTorta);
        carrito.push(elItemQueEstoyAgregando);
    }
    console.log(carrito);
    const carritoEnJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoEnJSON);
    window.location.href="carrito.html";
}

function alCargarLaPagina() {
    

    const losBotonesOrdenar = document.getElementsByClassName("botonOrdenar");
    
    for (let i=0; i<losBotonesOrdenar.length; i++){
        losBotonesOrdenar[i].addEventListener('click', function (evento) {
            const elBotonClickeado = evento.target;
            ordenarTorta(i, elBotonClickeado);
        })
    }

    document.getElementById("botonFinalizarCompra").addEventListener('click', finalizarCompra)
}



alCargarLaPagina();









