let socio = prompt('Bienvenido a la Pagina de River! ¿Sos Socio de River?');

if (socio =='si') {
    alert('Aca podes comprar Entradas para los partidos a $4000 c/u')
} else  {
    alert('Si no sos socio adherite en esta pagina https://www.cariverplate.com.ar/somos-river-ahora-asociate-al-club');
}

const carrito = [];

const menorPrecio = () => {
    tickets.sort((a,b) => a.precio - b.precio)
    mostrarLista()
};

const mayorPrecio = () => {
    tickets.sort ((a, b) => b.precio - a.precio)
    mostrarLista()
};

const mostrarLista = () => {
    const listaOrdenada = tickets.map( ticket => {
        return '- '+ ticket.rival+ ' $'+ ticket.precio
    });
    alert('Lista de Entradas: '+ '\n\n' + listaOrdenada.join('\n'));
    comprarTickets(listaOrdenada);
};

const comprarTickets = (listaDePartidos) => {
    let seguirComprando;
    let ticketRival='' ;
    let ticketCantidad = 0;

    do {
        ticketRival = prompt('Contra que rival queres ver el partido?' + '\n\n' + listaDePartidos.join('\n'));
        ticketCantidad = parseInt(prompt('Cuantas queres comprar?'));

        const ticket = tickets.find( ticket => ticket.rival.toLowerCase() === ticketRival.toLowerCase());

        if (ticket) {
            agregarAlCarrito(ticket, ticket.id, ticketCantidad);

        } else {
            alert('Escribi el nombre del Rival ')
        }

        seguirComprando = confirm('¿ Queres comprar otra entrada?')
    } while (seguirComprando);

    confirmarCompra();
}

const agregarAlCarrito = ( ticket, ticketId, ticketCantidad) => {
    const ticketRepetido = carrito.find(ticket => ticket.id === ticketId);
    if( ticketRepetido) {
        ticketRepetido.cantidad += ticketCantidad;
    } else {
        ticket.cantidad += ticketCantidad;
        carrito.push(ticket)
    }
    console.log(carrito)
};

const eliminarTicketCarrito = (ticketRival) => {
    carrito.forEach((ticket, index) => {
        if (ticket.rival.toLowerCase() === ticketRival) {
            if (ticket.cantidad > 1) {
                ticket.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })

    confirmarCompra()
}

const confirmarCompra= () => {
    const listaEntradas = carrito.map(ticket => {
        return '- '+ ticket.rival+ '| Cantidad: '+ ticket.cantidad
    });
    const confirmar = confirm( 'Checkout: '
    +'\n\n'+ listaEntradas.join('\n')
    +'\n\n Para continuar precione "Aceptar" sino "Cancelar" para eliminar entrada del carrito.');

    if(confirmar) {
        finalizarCompra(listaEntradas);
    } else {
        const ticketAEliminar = prompt('Ingrese el rival del partido que desea eliminar su entrada:');
        eliminarTicketCarrito(ticketAEliminar);
    }
};

const finalizarCompra = (listaEntradas) =>  {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad,0);
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0);

    alert('Detalle de tu compra:'
    +'\n\n'+ listaEntradas.join('\n')
    +'\n\nTotal de Entradas: '+ cantidadTotal
    +'\n\nEl total de la compra es: '+precioTotal
    +'\n\nGracias por su compra!');
};

const comprar = () => {
    const ticketsBaratos = confirm('¿Queres ver las entradas mas baratas primero?');
    if(ticketsBaratos) {
        menorPrecio()
    } else {
        mayorPrecio()
    }
};

comprar()
