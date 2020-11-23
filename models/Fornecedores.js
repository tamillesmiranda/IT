const mongoose = require('mongoose');

var fornecedores = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  login: String,
  senha: String,
});

fornecedores.methods.validaSenha = function (senha) {
  return senha == this.senha
};

module.exports = mongoose.model('fornecedores', fornecedores)