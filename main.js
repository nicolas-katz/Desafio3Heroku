
const express = require('express')
const Container = require('./desafio2')

const app = express()
const file = new Container('./products.json')
file.init()

const server = app.listen(process.env.PORT || 8080 , ()=>{
    try{
        console.log('run')
    }
    catch(err){
        console.log(err)
    }
})
app.get('/productos',(req, res) =>{
    try{
        const elementos = file.getAll()
        res.send(` Los elementos del archivo son ${JSON.stringify(elementos)}`)
    }
    catch(err){
        res.send(`Ocurrio un error al obtener los elementos: ${err}`)
    }
})
app.get('/productoRandom',(req, res) =>{
    const id = Math.floor(Math.random() * 4) + 1
    try{
        const elementoRandom = file.getById(id)
        res.send(`El elemento con id ${id}, es ${JSON.stringify(elementoRandom)}`)
    }
    catch(err){
        res.send(`Ocurrio un error al intentar obtener el elemento por id ${err}`)
    }
})


//ACTIVIDAD EN CLASE
//const http = require('http')
//const moment = require('moment')
//const server = http.createServer((request, response) => {
//  const horaAct = parseInt(moment().format('HH'))
// console.log(horaAct)
//    let mensaje =  ''
//     if(horaAct >=6 && horaAct <=12){
//         mensaje = 'buenos dias!'
//     }
//     else if( horaAct >=13 && horaAct <= 19){
//         mensaje = 'buenas tardes!'
//     }
//     else{
//         mensaje = 'buenas noches!'
//     }
//     console.log(typeof(horaAct))
//     response.end(mensaje)
// });
// const connect = server.listen(8080, () => {
//     let port = connect.address().port;
//  console.log(`Escuchando por puerto ${port}`)
// })

