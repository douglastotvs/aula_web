const express = require("express");

const app = express()

app.use(express.json());

const usuarios = []

app.get('/usuarios', (request, response) =>{
    response.json({usuarios: usuarios})
})

app.post('/usuarios', (request, response) =>{

    const usuario = {
        nome: request.body.nome,
        sobrenome: request.body.sobrenome,
    }

    usuarios.push(usuario)
    
    response.json({usuarios: usuarios})
   
})

app.get('/produtos', (request, response) =>{
    response.json({produtos: []})
})

app.listen(3000, () => {
    console.log("Serbidor ok")
})