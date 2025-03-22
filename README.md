# 📌 Introdução ao Backend com Node.js

## 🚀 O que é Backend?
O backend é a parte do desenvolvimento web responsável por gerenciar a lógica de negócios, banco de dados e comunicação entre o servidor e o frontend. No Node.js, isso é feito utilizando JavaScript no lado do servidor.

---

## 📌 Por que usar Node.js?
- **JavaScript no backend** → Usa a mesma linguagem do frontend.
- **Alta performance** → Baseado no motor V8 do Chrome.
- **Não bloqueante e assíncrono** → Permite manipular múltiplas requisições ao mesmo tempo.
- **Grande comunidade** → Muitas bibliotecas disponíveis no NPM.

---

## 🚀 Criando um Servidor com Node.js

### 📌 Instalando o Node.js
1. Baixe e instale o Node.js em [nodejs.org](https://nodejs.org/).
2. Verifique a instalação:
    ```bash
    node -v
    ```

### 📌 Criando um Servidor HTTP Simples
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Olá, mundo!');
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
```

---

## 🚀 Framework Express.js
O Express.js simplifica a criação de APIs e servidores no Node.js.

### 📌 Instalando o Express
```bash
npm install express
```

### 📌 Criando um Servidor com Express
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao backend com Node.js!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

---

## 🚀 Manipulação de Arquivos com `fs`
```javascript
const fs = require('fs');

// Criar um arquivo
fs.writeFileSync('arquivo.txt', 'Conteúdo do arquivo');

// Ler um arquivo
const data = fs.readFileSync('arquivo.txt', 'utf8');
console.log(data);
```

---

## 🚀 Banco de Dados com Node.js
Geralmente usamos bancos de dados como **MongoDB** ou **MySQL**.

### 📌 Conectando ao MongoDB com Mongoose
```bash
npm install mongoose
```
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meuBanco', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch(err => console.error(err));
```

---

## 🎯 Conclusão
- O **Node.js** permite criar servidores backend eficientes.
- O **Express.js** facilita a construção de APIs.
- O **Módulo `fs`** permite manipulação de arquivos.
- **Bancos de dados** como MongoDB e MySQL são usados para armazenar dados.

🚀 Agora você tem uma base sólida para começar no backend com Node.js!
