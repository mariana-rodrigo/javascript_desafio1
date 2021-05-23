function Torta (nombre, descripcion, precio, imagen){
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.precio=precio;
    this.imagen =imagen;
}

function tortaSeleccionada(nombre, precio){
    this.nombre=nombre;
    this.precio=precio;
}


function agregarProducto(elBotonClickeado, productosElegidos) {
    
    const elDivPadre = elBotonClickeado.parentElement;
    const nombreTortaElegida = elDivPadre.getAttribute("data-nombre");
    const precioDeLaTortaElegida =elDivPadre.getAttribute("data-precio");
    const tortaElegida = new tortaSeleccionada(nombreTortaElegida, precioDeLaTortaElegida);
    productosElegidos.push(tortaElegida);
    console.log(productosElegidos)
}

function finalizarCompra(productosElegidos){
    const carritoEnJSON = JSON.stringify(productosElegidos);
    localStorage.setItem("carrito", carritoEnJSON);
    window.location.href="carrito.html";

}
function loQueSeHaceAlCargarLaPagina() {

    const bomba = new Torta ("Torta Bomba", "Bizcochuelo húmedo de chocolate. Merengue Italiano. Mouse de choclate", 1700, "imagenes/Bomba.jpg" );
    const paraiso = new Torta ("Torta paraíso", "Bizcohuelo de vainilla. Relleno ganache de chcolate con leche. recubierto con crocante de avellanas y maní", 1900, "imagenes/Paraiso.jpg");
    const productos = [];
    productos.push(bomba);
    productos.push(paraiso);
    
    for (let i=0; i<productos.length; i++){
        let card = document.createElement("div");

        card.innerHTML =`
        <img src="${productos[i].imagen}"/ width=100% height= 25%>            
        <h1> Nombre: ${productos[i].nombre}</h1>
        <h2> Descripción: ${productos[i].descripcion} </h2>
        <h3>Precio: $${productos[i].precio}</h3>
        <button class="botonParaAgregarProducto">Agregar</button>`;

        const main = document.getElementsByTagName("main")[0];
        main.appendChild(card);
        card.setAttribute("class","divProductos");
        card.setAttribute("data-nombre", productos[i].nombre);
        card.setAttribute("data-precio", productos[i].precio)

    }

    const losBotonesDeAgregarProducto = document.getElementsByClassName("botonParaAgregarProducto");

    const productosElegidos = [];

    for (let i=0; i<losBotonesDeAgregarProducto.length; i++){
        losBotonesDeAgregarProducto[i].addEventListener('click', function (evento) {
            const elBotonClickeado = evento.target;
            agregarProducto(elBotonClickeado, productosElegidos);
            const agregadoExitosamente = document.createElement('span');
            agregadoExitosamente.innerHTML= `<span">Agregado exitosamente!</span>`;
            agregadoExitosamente.classList.add('animate__animated', 'animate__fadeOutUp')
            elBotonClickeado.parentElement.appendChild(agregadoExitosamente);
        });
    }
    
    
    
    const botonFinalizarCompra = document.getElementById('botonFinalizarCompra');
    botonFinalizarCompra.addEventListener('click', function (evento) {
        finalizarCompra(productosElegidos);
    });


    
}


loQueSeHaceAlCargarLaPagina();







/* function ItemCarrito(nombre, precioPorKilo, precioTotalporTorta){
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



alCargarLaPagina(); */
