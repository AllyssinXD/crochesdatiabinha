const mongoose = require('mongoose');

// Definir o Schema do Mongoose para o modelo de usuário
const contactSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }, // O campo 'email' deve ser único
  message: String,
  createdAt: { type: Date, default: Date.now }
});

// Criar e exportar o modelo 'Usuario' com base no schema definido
module.exports = mongoose.model('Contact', contactSchema);