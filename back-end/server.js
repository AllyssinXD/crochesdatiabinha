const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Contact = require('./models/Contact');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB.');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Salvar os dados do formulário no banco de dados usando o modelo Contact
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Mensagem recebida com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar mensagem:', error);
    res.status(500).json({ error: 'Erro ao salvar mensagem.' });
  }
});

app.get('/api/list', async (req, res) => {
  try {
    const registros = await Contact.find(); // Consulta para encontrar todos os registros
    res.json(registros); // Retorna os registros como JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar registros.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});