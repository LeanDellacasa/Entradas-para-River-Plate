const mostrarEntradas = async () => {
    const contenedor = document.getElementById("card-entrada");


    const data =  await ticketsController() 

    

    data.forEach(ticket => {
        const div = document.createElement('div');
        div.classList.add ('card');
        div.innerHTML += `<div class = "card-image">
            <img src= ${ticket.img} width = "300px" height ="200px" >
            </div>
            <div class = "card-content">
            <h3>${ticket.torneo}</h3>
            <h2>${ticket.rival}</h2>
            <h2>$ ${ticket.precio}</h2>
            <button id><i id=${ticket.id} class="agregar">Comprar Ya</i></button>
            </div>`

            contenedor.appendChild(div);
    });


};
