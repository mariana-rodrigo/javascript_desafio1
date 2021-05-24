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
    const paraiso = new Torta ("Torta Paraíso", "Bizcohuelo de vainilla. Relleno ganache de chcolate con leche. recubierto con crocante de avellanas y maní", 1900, "imagenes/Paraiso.jpg");
    const infierno = new Torta ("Torta Infierno", "Bizcochuelo Red Velvet. Crema de Maracuyá y cardamomo. Ganache de chocolate blanco", 1600, "imagenes/Infierno.jpeg");
    const limaLimon = new Torta ("Torta Lima Limón", "Bizcochuelo de vainilla. Relleno Ganache de limón con crocantes de pistacho. Recubierto con merengue italiano con lima", 1500, "imagenes/LimaLimon.jpg");
    const dartagnan = new Torta ("Torta D'Artagnan", "Bizcochuelo de Naranja. Crema de Pistacho y Nutella. Ganache de chocolate blanco", 1800, "imagenes/Dartagnan.png");
    const cale = new Torta ("Torta Cale", "Bizcochuelo marmolado de café. Relleno crema rusa. Recubierto con chocolate amargo y crocantes de maní", 1500, "imagenes/Cale.jpg")

    const productos = [];
    productos.push(bomba);
    productos.push(paraiso);
    productos.push(infierno);
    productos.push(limaLimon);
    productos.push(dartagnan);
    productos.push(cale);
    
    for (let i=0; i<productos.length; i++){
        let card = document.createElement("div");

        card.innerHTML =`
        <img src="${productos[i].imagen}"/ class="tamañoImagenGaleria">            
        <h1> Nombre: ${productos[i].nombre}</h1>
        <h2> Descripción: ${productos[i].descripcion} </h2>
        <h3>Precio: $${productos[i].precio}</h3>
        <button class="botonParaAgregarProducto">Agregar</button>`
        

        const main = document.getElementsByTagName("main")[0];
        main.appendChild(card);
        card.setAttribute("class","divProductos");
        card.setAttribute("data-nombre", productos[i].nombre);
        card.setAttribute("data-precio", productos[i].precio);
        

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
            setTimeout(function(){
                elBotonClickeado.parentElement.removeChild(agregadoExitosamente);;
            },300) 
        });
    }
    
    
    
    const botonFinalizarCompra = document.getElementById('botonFinalizarCompra');
    botonFinalizarCompra.addEventListener('click', function (evento) {
        finalizarCompra(productosElegidos);
    });


    
}


loQueSeHaceAlCargarLaPagina();







