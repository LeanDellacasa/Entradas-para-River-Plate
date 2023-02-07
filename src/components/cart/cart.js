let carrito = [];

const ticketContenedor = document.getElementById('card-entrada');

ticketContenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains('agregar')) {
        validarTicketEnCarrito(e.target.id);
    }
});

const validarTicketEnCarrito = (ticketId) => {
    const ticketRepetido = carrito.find(ticket => ticket.id == ticketId);

    if(!ticketRepetido) {
        const ticket = tickets.find( ticket => ticket.id == ticketId);
        carrito.push(ticket);
        mostrarTicketEnCarrito(ticket);
        TotalesCarrito(carrito);
    } else {
        ticketRepetido.cantidad++ 
        const cantidadTicket = document.getElementById(`cantidad${ticketRepetido.id}`);
        cantidadTicket.innerText = `Cantidad: ${ticketRepetido.cantidad}`;
        TotalesCarrito(carrito);
    }
};

const mostrarTicketEnCarrito =(ticket) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const div = document.createElement('div');
    div.classList.add('ticketEnCarrito');
    div.innerHTML = `
        <p>${ticket.rival}</p>
          <p>Precio: ${ticket.precio}</p>
          <p id=cantidad${ticket.id}>Cantidad: ${ticket.cantidad}</p>
          <button class="boton-eliminar" value="${ticket.id}">X</button> -->`

    contenedor.appendChild(div);
    
};

const TotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad ,0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    mostrarTotalCarrito ( totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);

};

const mostrarTotalCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById( 'contador-carrito');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerHTML = totalCompra;
};

const eliminarTicketCarrito = (ticketId) => {
    const ticketIndex = carrito.findIndex(ticket => ticket.id == ticketId);
    carrito.splice(ticketIndex, 1);

    actualizarCarrito(carrito);
    TotalesCarrito(carrito);
    
};

const actualizarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');
    
    contenedor.innerHTML = '';

    carrito.forEach(ticket => {
        
        const div = document.createElement('div');
        div.classList.add('ticketEnCarrito');
        div.innerHTML = `
            <p>${ticket.rival}</p>
            <p>Precio: ${ticket.precio}</p>
            <p id=cantidad${ticket.id}>Cantidad: ${ticket.cantidad}</p>
            <button class="boton-eliminar" value="${ticket.id}">X</button> -->`

        contenedor.appendChild(div);

    });
};

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};

document.getElementById("vaciar-carrito").addEventListener("click", function() {
    // Validar si el carrito está vacío
    if (carrito.length === 0) {

      // Mostrar mensaje "Su carrito esta vacío" con SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Su carrito esta vacío'
      });
    } else {
      // Eliminar todos los productos del carrito

      carrito = [];
      // Borrar los productos del storage
      localStorage.removeItem("carrito");

      // Actualizar carrito
      TotalesCarrito(carrito);
      actualizarCarrito(carrito);

      // Mostrar mensaje "Los productos han sido eliminados con éxito!" con SweetAlert  
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Los productos han sido eliminados con éxito!'
      });
    }
  });
