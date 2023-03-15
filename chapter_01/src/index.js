
//importação do express 
const express =  require('express')


//constante que faz a chamada do serviço do express 
const app = express();

/**
 * GET      => Buscar informação 
 * POST     => Inserir uma informação no servidor 
 * PUT      => Alterar uma informação no servidor 
 * PATCH    => Alterar uma informação específica 
 * DELETE   => Deletar uma informação no servidor 
 */

app.get("/courses", (request, response) =>{
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) =>{
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.put("/courses/:id", (request, response) =>{
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.patch("/courses/:id", (request, response) =>{
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.delete("/courses/:id", (request, response) =>{
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})


app.get("/", (request, response) =>{

    //Método sendo deixa enviar uma msg na requisição
    // return response.send("Hello Word")
    return response.json({message: "Hello Word Ignite -  Fundamentos NODEJS "})
})


//Start da aplicação em uma porta escolhida 
app.listen(3333)