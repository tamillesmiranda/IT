const express = require('express')
      ,mongoose = require('mongoose')
      ,consumidores = require('../models/Consumidores')
      ,VerificarToken = require('../models/VerificaToken');

const router = express.Router();

router.get("/", VerificarToken, (req, res, next) => {

    consumidores.find()
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//Cadastrar novo usuario
router.post("/", (req, res, next) => {
  const novapessoa = new consumidores({
    _id: new mongoose.Types.ObjectId(),
    nome_consumidores: req.body.nome_consumidores,
    rg: req.body.rg,
    cpf: req.body.cpf,
    cc_consumidores: req.body.cc_consumidores,
    login: req.body.login,
    senha: req.body.senha,
    endereco: [
      { logradouro: req.body.logradouro },
      { numero: req.body.numero },
      { bairro: req.body.bairro },
      { cidade: req.body.cidade },
      { cep: req.body.cep },
      { uf: req.body.uf }
    ]
  });
  
  novapessoa
    .save()
    .then(result => {
      res.status(201).json({
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
      // Retorna o token de acesso
  res.status(200).send('Cadastro Realizado com sucesso!');
});

module.exports = router;