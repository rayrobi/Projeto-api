
// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotasCliente = express.Router();

// GET
// rota para acesar o método GET para cliente
rotasCliente.get('/', (req, res) => {
  res.status(200).send({
   
  });
});


// POST
// rota para acesar o método POST para cliente
rotasCliente.post('/', (req, res) => {

  res.status(200).send({

  });
});

// PUT
rotasCliente.put('/', (req, res) => {
  // responder com mensagem de sucesso
  res.status(200).send({
  
  });
});


// DELETE
// rota raiz do servidor
rotasCliente.delete('/', (req, res) => {
  // responder com mensagem de sucesso
  res.status(202).send({
 
  });
});

// exportar toda a configuração das rotas
module.exports = rotasCliente;
