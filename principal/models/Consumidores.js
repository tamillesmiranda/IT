const mongoose = require('mongoose')

var consumidores = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome_consumidores: String,
    sobrenome_consumidores: String,
    cc_consumidores: String,
    login: String,
    senha: String,    
    cpf: String,
    rg: String,
    endereco: [{ cep: String },{  logradouro: String }, { numero: String }, { complemento: String }, { bairro: String }, { cidade: String }, { uf: String }],
    cartao_consumidores: String,
    nome_cartao_consumidores: String,
    cartao_vcto_consumidores: Date,
    ccv_consumidores: String,
});

consumidores.methods.validaSenha = function(senha) {
  return senha == this.senha
};

module.exports = mongoose.model('consumidores', consumidores)