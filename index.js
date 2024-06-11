import express from 'express';

const app = express();
let dominio_raiz = "";



app.get('/',(req,res)=>{
    dominio_raiz = req.protocol + '://' + req.get('host');
    res.status(200).json(        
        {
            "nome-api":"api loja veículo",
            "dominio-raiz":dominio_raiz,       
            "status":"ok",
            "rotas":rotas(dominio_raiz, PORT)
        }
    );
})
const rotas = (dominio_raiz)=>{
    console.log(dominio_raiz);
    let rota = [
        "fabricante",
        "veiculo",
        "categoria"
    ]
    return rota.map(r=>{return `${dominio_raiz}/${r}`});

}
const PORT = 3030;
app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})