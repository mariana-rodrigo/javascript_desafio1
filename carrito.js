function alCargarLaPagina() {
    const carritoGuardado = localStorage.getItem("carrito")
    const carrito = JSON.parse(carritoGuardado);
    console.log(carrito);

    
    const tabla = document.createElement("table");
    tabla.setAttribute("class","table");
    tabla.setAttribute("class","table-bordered");
    tabla.setAttribute("class","table align-middle");
    tabla.innerHTML=`<tr class="letraEnNegrita tabla__fondoCeleste textoCentrado tamañoLetraL">
    <td>Producto</td>
    <td>Precio</td>
    </tr>`
    const main = document.getElementById('carrito');
    main.appendChild(tabla);




    /* const listaDeProductos = document.createElement("ul");
    elDivDelCarrito = document.getElementById("elDivDelCarrito");
    elDivDelCarrito.appendChild(listaDeProductos); */

    for (let i = 0; i < carrito.length; i++) {
        const elementoDelCarrito = document.createElement("tr");
        elementoDelCarrito.innerHTML = `<td>${carrito[i].nombre}</td>  <td>$${carrito[i].precio}</td>`;
        tabla.appendChild(elementoDelCarrito);
        elementoDelCarrito.setAttribute("class", "tabla__estiloLista");
        if(i%2==0){
            elementoDelCarrito.setAttribute("class", "tabla__fondoRosa");

        } else{
            elementoDelCarrito.setAttribute("class", "tabla__fondoCeleste");
        }
        
    }
    
    let totalAPagar = 0;
    for (let i = 0; i < carrito.length; i++) {
        
        totalAPagar = totalAPagar + Number( carrito[i].precio);
    }
    const total = document.createElement ('h1');
    total.innerHTML=`El total a pagar es $`+totalAPagar;
    tabla.appendChild(total);


}


alCargarLaPagina();

