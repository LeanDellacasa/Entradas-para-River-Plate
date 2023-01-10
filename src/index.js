document.addEventListener('DOMContentLoaded', () => {
    mostrarEntradas();

    if(localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
        actualizarCarrito(carrito);
        TotalesCarrito(carrito);
    }
} );