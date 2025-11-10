const pImg = document.querySelector('#pImg');
const hTitulo = document.querySelector('#hTitulo');
const ulGeneros = document.querySelector('#ulGeneros');
const pDescripcion = document.querySelector('#pDescripcion');
const aTrailer = document.querySelector('#aTrailer');
const dEstreno = document.querySelector('#dEstreno');
const dDuracion = document.querySelector('#dDuracion');
const dDirector = document.querySelector('#dDirector');

const search = window.location.search;
const params = new URLSearchParams(search)

const id = params.get("id");
console.log( id)

const pelicula = peliculas.filter( item => item.id == id)[0];

pImg.setAttribute('alt', pelicula.titulo);
pImg.setAttribute('src', pelicula.portada);

pelicula.genero.forEach(genero => {
    const li = document.createElement('li');
    li.textContent = genero
    li.classList.add('pill');
    li.classList.add('pill-text');
    li.classList.add('filter');
    ulGeneros.appendChild( li );
});

pDescripcion.textContent = pelicula.descripcion;
aTrailer.setAttribute('href', pelicula.trailer);
dEstreno.textContent = pelicula.estreno;
dDuracion.textContent = pelicula.duracion + ' min';
dDirector.textContent = pelicula.director;
