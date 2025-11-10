/* ----------------------- Seleccionamos los elementos ---------------------- */
const ulFillters = document.querySelector('#fillters');
const spanYear = document.querySelector('#year');
const container = document.querySelector('#container');
const year = new Date();

spanYear.textContent = year.getFullYear();


/* --------- FUNCIÓN 1: Recibe el listado de peliculas y las muestra -------- */
const mostrarPeliculas = (peliculas) => {

    container.innerHTML = "";

    peliculas.forEach( pelicula => {
        const li = document.createElement('li');
        li.classList.add('card');

        const a = document.createElement('a');
        a.setAttribute('href', 'detalle.html?id='+pelicula.id);

        const img = document.createElement('img');
        img.setAttribute('src', pelicula.portada)
        img.setAttribute('alt', pelicula.titulo);

        const h2 = document.createElement('h2');
        h2.textContent = pelicula.titulo;
        
        const p = document.createElement('p');
        p.textContent = pelicula.estreno;


        a.appendChild( img );
        a.appendChild( h2);
        a.appendChild( p );

        li.appendChild( a);
        container.appendChild( li );
    });

}

/* --------------- FUNCIÓN 2: Crea las opciones de los filtros -------------- */
const mostrarFiltros = ( generos ) => {
    const li = document.createElement('li');
    li.textContent = 'Todas';
    li.classList.add('pill');
    li.classList.add('pill-text');
    li.classList.add('filter');
    li.addEventListener( 'click', () => mostrarPeliculas(peliculas)  )
    ulFillters.appendChild( li );

    generos.forEach( genero => {
        const li = document.createElement('li');
        li.textContent = genero;
        li.classList.add('pill');
        li.classList.add('pill-text');
        li.classList.add('filter');
        li.addEventListener( 'click', () => filtrarPeliculas(genero)  )
        ulFillters.appendChild( li );
    });

}

/* ---- FUNCIÓN 3: Recibe el genero y filtra el Array, llama a la Función 1 --- */
const filtrarPeliculas = ( genero) => {
    const filtradas = peliculas.filter( pelicula => pelicula.genero.includes( genero)  )
    mostrarPeliculas(filtradas);
}
mostrarFiltros( generos );
mostrarPeliculas( peliculas );