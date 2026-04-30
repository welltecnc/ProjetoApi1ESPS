const express = require("express");
const cors= require("cors");
const {v4: uuidv4} = require("uuid");

const app= express();
const Port = 5001;

app.use(cors({
      origin:"projeto-api1-esps-weld.vercel.app/"
}));

app.use(express.json());

let produtos=[];

// app.get("/teste", (req,res)=>{
//      res.send("Seja Bem-vindo ao Teste")
// })

//ROTA PRODUTO- CREATE
app.post("/produtos",(req,res)=>{
     const {nome,descricao}= req.body;
     if(!nome || !descricao){
          return res.status(400).json({error:"Campos Obrigatórios"});
     }
     const novoItem ={id:uuidv4(),nome, descricao};
     produtos.push(novoItem);
     res.status(201).json(novoItem)
});

// LER OS PRODUTOS

app.get("/produtos",(req,res)=>{
     res.json(produtos)
})



app.listen(Port,()=>{
 console.log(`Servidor Rodando na Porta,${Port}`)
})
