let torta;
let cantidad;
let precioFinal = 0;

function Torta(nombre, descripcion, precio, recomendaciones) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.recomendaciones = recomendaciones;
}

let tortaBomba = new Torta("Torta Bomba", "Bizcochuelo húmedo de chocolate Merengue Italiano Mouse de chocolate", 1700, "Necesita refrigeración Se puede opción apta para celíacos y diabéticos");
let tortaParaiso = new Torta("Torta Paraíso", "Bizcochuelo de vainilla Relleno Ganache de chocolate con leche Recubierto con crocante de avellanas y maní", 1900, "No es necesario mantener refrigerada Se puede hacer opción apta para celíacos");
let tortaInfierno = new Torta("Torta Infierno", "Bizcochuelo Red Velvet Crema de Maracuyá y cardamomo Ganache de chocolate blanco", 1600, "Necesita refrigeración Se puede hacer opción apta para celíacos y veganos");
let tortaLimaLimon = new Torta("Torta Lima Limón", "Bizcochuelo de vainilla Relleno Ganache de limón con crocantes de pistacho Recubierto con merengue italiano con lima", 1500, "Necesario mantener refrigerada Se puede hacer opción apta para celíacos");


const carrito = [];

function mostrarYSolicitarInformacion(tortaSeleccionada) {
    alert("La descripción de la torta elegida es: " + tortaSeleccionada.descripcion);
    alert("Las recomendaciones para la torta elegida son: " + tortaSeleccionada.recomendaciones);
    cantidad = Number(prompt("De cuántos kilos es la torta que deseas ordenar?"));

    let precioTotal = cantidad * tortaSeleccionada.precio;
    alert("El total a pagar por esta torta es " + precioTotal);
    precioFinal = precioFinal + precioTotal;

    carrito.push(tortaSeleccionada);

    agregarAlgoMasOTerminar(carrito, precioFinal);
}

function agregarAlgoMasOTerminar(carrito, precioFinal) {
    let agregarAlgoMas = prompt("Deseas agregar algo más? Sí/No")
    if (agregarAlgoMas == "Sí") {
        solicitarTorta();
    } else {
        alert("Agregaste " + carrito.length + " productos");
        alert("El total a pagar es " + precioFinal)
    }
}

function solicitarTorta() {
    torta = prompt("Cuál de las siguientes tortas quieres ordenar: Torta Bomba - Torta Paraíso - Torta Infierno - Torta Lima Limón");
    if (torta === tortaBomba.nombre) {
        mostrarYSolicitarInformacion(tortaBomba);

    } else if (torta === tortaParaiso.nombre) {
        mostrarYSolicitarInformacion(tortaParaiso);

    } else if (torta === tortaInfierno.nombre) {
        mostrarYSolicitarInformacion(tortaInfierno);

    } else if (torta === tortaLimaLimon.nombre) {
        mostrarYSolicitarInformacion(tortaLimaLimon);

    } else {
        alert("Opción incorrecta");
        solicitarTorta();
    }
}

solicitarTorta();