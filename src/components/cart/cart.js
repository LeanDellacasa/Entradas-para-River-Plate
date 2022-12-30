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
    } else {
        ticketRepetido.cantidad++ 
        const cantidadTicket = document.getElementById(`cantidad${ticketRepetido.id}`);
        cantidadTicket.innerText = `Cantidad: ${ticketRepetido.cantidad}`;
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

const TotalesCarrito = (carrito) => 