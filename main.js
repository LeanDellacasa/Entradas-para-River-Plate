let socio = prompt('Bienvenido a la Pagina de River! ¿Sos Socio de River?');

if (socio =='si') {
    alert('Aca podes comprar Entradas para los partidos a $4000 c/u')
} else  {
    alert('Si no sos socio adherite en esta pagina https://www.cariverplate.com.ar/somos-river-ahora-asociate-al-club');
}

let partidos = 0;
let cantidad = 0;
let precio = 4000;
let sumaTotalEntradas = 0;

do {

    function comprarEntradas () {
        partidos = parseInt(prompt('Cuantos partido queres ir a ver ?'));
        cantidad = parseInt(prompt('Con cuantas personas vas ?'));
        entradas = sumaTotal() ;
    }
    comprarEntradas();
    
    
    function sumaTotal() {
        let sumaTotal = partidos * cantidad * precio;
        sumaTotalEntradas = sumaTotal + sumaTotalEntradas;
    }

    seguirComprando = confirm('Queres comprar mas entradas?')
    
} while (seguirComprando);
console.log(sumaTotalEntradas);


alert('Gracias por tu compra !')
alert('El total de tus entradas es $ ' + sumaTotalEntradas);


