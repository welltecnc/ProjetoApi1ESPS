const express = require("express");
const cors= require("cors");
const bodyParser=require("body-parser");

const app= express();
const Port = 5001;

app.get("/teste", (req,res)=>{
     res.send("Seja Bem-vindo ao Teste")
})

//ROTA PRODUTO- CREATE





app.listen(Port,()=>{
 console.log(`Servidor Rodando na Porta,${Port}`)
})
