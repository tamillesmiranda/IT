const mongoose = require('mongoose')

var consumidores = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome_consumidores: String,
    rg: String,
    cpf: String,
    cc_consumidores: String,
    login: String,
    senha: String,
    endereco: [{ logradouro: String },
      { numero: String },
      { complemento: String },
      { bairro: String },
      { cidade: String }, 
      { cep: String }, 
      { uf: String }],
});

consumidores.methods.validaSenha = function(senha) {
  return senha == this.senha
};

module.exports = mongoose.model('consumidores', consumidores)