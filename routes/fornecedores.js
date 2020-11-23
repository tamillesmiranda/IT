const express = require('express')
  , mongoose = require('mongoose')
  , fornecedores = require('../models/Fornecedores')
  , VerificarToken = require('../models/VerificaToken');

const router = express.Router();

router.get("/", VerificarToken, (req, res, next) => {

  fornecedores.find()
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
  const novapessoa = new fornecedores({
    _id: new mongoose.Types.ObjectId(),
    nome_fornecedores: req.body.nome_fornecedores,
    rg: req.body.rg,
    cpf: req.body.cpf,
    login: req.body.login,
    senha: req.body.senha,
    endereco: [
      { logradouro: req.body.logradouro },
      { numero: req.body.numero },
      { bairro: req.body.bairro },
      { cidade: req.body.cidade },
      { cep: req.body.cep },
      { uf: req.body.uf }
    ],
    agenda: [
      { data: req.body.data },
      { dinponivel: req.body.dinponivel }
    ],
    servicos: [{ descricao: req.body.descricao },
    { img: req.body.img },
    { pagamento: req.body.pagamento },
    { custo: req.body.custo },
    { medida: req.body.medida }
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
  res.status(200).send('Cadastro Realizado com sucesso!'/*  requireDir('./../views/login.html') */);

});

module.exports = router;