const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/add-categoria', async (req, res) => {
  const { nome } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO categorias (nome_categoria) VALUES (?)',
      [nome]
    );
    res.send('Categoria inserida com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao inserir o categoria: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});