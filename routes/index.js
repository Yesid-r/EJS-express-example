const express = require('express')
const router = express.Router()
const marvel = require('./../resources/files/Marvel.json')


let peliculasOb = new Map(Object.entries(marvel))
let peliculas = new Map()
peliculasOb.forEach((v,k)=>{

    peliculas = new Map(Object.entries(v))

})
router.get('/',(req,res) =>{
    
    res.render('index', {peliculas:peliculas, title:"Pagina de inicio"})

})
router.post('/', (req,res) =>{
    console.log('buscar')
})

module.exports  = router