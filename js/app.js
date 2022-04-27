fetch('./js/movies.json')
    .then( (resp) => resp.json())
    .then( (data) => {
        data.forEach(movies => {
            const div = document.createElement('div');
            div.className = 'col-sm-6 col-md-4 movies_list';
            div.innerHTML = `<div id="${movies.id}" class="img-container">
                                <img class="img_mv" src="${movies.imagen}" alt="">
                            
                            <p class="precio_mv">Comprar por $${movies.precio}</p>
                            <h5 class="titulos">${movies.nombre}</h5></div>`;

            lista.append(div);

            let boton = document.getElementById(`${movies.id}`)

            boton.addEventListener('click', ()=> addCart(movies.id))
        })
    })

const addCart = ()=>{
    alert('hola');
}
