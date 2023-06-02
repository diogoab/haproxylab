const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/generate-token', (req, res) => {
    const payload = { username: 'usuário' }; // Substitua 'usuário' pelo nome de usuário desejado
    const secretKey = 'chave_secreta'; // Substitua 'chave_secreta' pela sua chave secreta desejada
    const token = jwt.sign(payload, secretKey);
    res.send(token);
});

app.listen(3000, () => {
    console.log('Servidor do aplicativo está executando na porta 3000.');
});
