document.getElementById('title').addEventListener('change',()=>{

    const filter=document.getElementById('busqueda').value
    const selTowns=document.getElementById('peliculas')

    peliculas.length=0;

    peliculasBusq.filter(pelicula => pelicula.title == filter)
    .forEach(reg => {
        
        
    })
})