
const cargarPeliculas = async() => {
    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4308a1f7a0eb1a3effd49d9fe6e1e169&language=es-MX');
        if(respuesta.status === 200){
            const datos = await respuesta.json();
           
            datos.results.forEach(pelicula => {

                const div = document.createElement('div');
                div.className = 'col-sm-6 col-md-3 movies_list';
                div.innerHTML = `<div id="${pelicula.id}" class="img-container">
                                    <img class="img_mv" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="">
                                
                                <p class="precio_mv">Comprar por $1000</p>
                                <h5 class="titulos">${pelicula.title}</h5></div>`;

                lista.append(div);

                let boton = document.getElementById(`${pelicula.id}`)

                boton.addEventListener('click', ()=> addCart(pelicula.id))
            });
        }


    } catch(error){
        console.log(error);
    }
    
const addCart = ()=>{
    alert('hola');
}
}
const entrar = ()=>{
    document.getElementById('logWindow').className = 'animate-out';
    setTimeout(()=>{
            loginSuccess.className = 'oculto';
            homePage.className = 'visible';
    },1000)
}

cargarPeliculas();




loginBtn.onclick = ()=>{
    errorInput.innerHTML = '';
    if(contraseñaTxt.value.length > 8){
        entrar();
    }
    else{
        let error = document.createElement('p');
        error.className = 'error-form';
        error.innerHTML = 'La contraseña debe tener mínimo 8 caracteres';
        errorInput.append(error);
    }
}