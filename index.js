const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('<h1> o Bicho ta vivo </h1>'));

app.listen(port, () => console.log(`Rodando na porta: ${port}`));
