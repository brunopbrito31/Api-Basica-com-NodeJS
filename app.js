const http = require('http');

const estados =require("./estados.json");

const server = http.createServer((request, response) =>{
    response.setHeader("Content-Type","application/json");
    response.write(JSON.stringify(estados));

    response.end();
});

server.listen(4000, ()=> console.log("Servidor rodando na porta 4000"));