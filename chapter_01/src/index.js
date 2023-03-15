
//importação do express 
const express =  require('express')


//constante que faz a chamada do serviço do express 
const app = express();

app.get("/", (request, response) =>{

    //Método sendo deixa enviar uma msg na requisição
    // return response.send("Hello Word")
    return response.json({message: "Hello Word Ignite -  Fundamentos NODEJS "})
})


//Start da aplicação em uma porta escolhida 
app.listen(3333)