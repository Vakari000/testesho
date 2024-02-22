const express = require('express');
const cors = require('cors'); // Importa o módulo cors

const app = express();
const PORT = process.env.PORT || 3000;

// Habilita o middleware CORS
app.use(cors());

// Defina as rotas e lógica do servidor abaixo
// Exemplo:
app.post('/salvar-mensagem', (req, res) => {
    // Lógica para salvar a mensagem aqui
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
