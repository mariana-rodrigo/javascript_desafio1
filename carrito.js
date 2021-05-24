async function generarLinkDePago(carrito) {
    const productosAPagar = carrito.map((elemento) => {
        let nuevoElemento = {
            title: elemento.nombre,
            description: "",
            picture_url: "",
            category_id: "",
            quantity: 1,
            currency_id: "ARS",
            unit_price: Number(elemento.precio),
        };
        return nuevoElemento;
    });

    const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
        method: "POST",
        headers: {
            Authorization: "Bearer TEST-4971135155546240-052421-480b9c59d6bb404ce1c5b579027d81fd-27406568",
        },
        body: JSON.stringify({
            items: productosAPagar,
        }),
    }
    );
    const data = await response.json();
    window.open(data.init_point, "_blank");
}

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
    const botonPagar = document.createElement('button');
    botonPagar.innerHTML=`PAGAR`;
    total.appendChild(botonPagar);

    botonPagar.addEventListener('click', () => {
        generarLinkDePago(carrito)
    });  
}




alCargarLaPagina();

