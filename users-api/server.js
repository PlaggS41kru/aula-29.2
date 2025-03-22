const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const server = http.createServer(rotas);
server.listen(5000, () => console.log("Servidor Rodando!"));

function retorno(statusCode, contentType, resposta) {
    response.writeHead(statusCode, contentType);
    return response.end(resposta);
}

function rotas(request, response) {
    const URL = url.parse(request.url, true);
    const filePath = path.join(__dirname, "..", "mock", "alunos.json");

    if (request.method === "GET" && URL.pathname === "/" ){
        return response.end("Olá Mundo!");
    }

    if (request.method === "GET" && URL.pathname === "/alunos"){   
        fs.readFile(filePath, "utf-8", (error, data) => {
            if (error) {
                console.error(error);
                response.writeHead(400, { "Content-Type": "text/plain" })
                return response.end(JSON.stringify({ error: "Erro ao ler arquivo."}));
            }

            retorno(200, { "Content-Type": "text/plain" }, data);
        } );  
    }
}
