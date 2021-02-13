/**
 * Este arquivo configura a bibliotéca express antes de torná-la disponível para o aplicativo.
 * Aqui que são adiconados os middlewares que adicionarão mais recursos ao express.
 * @see https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
 * @author Rosa, Genesis @see https://linkedin.com/in/mrgenesis
 * 
 */
const

  app = require('express')()

  // A tratativa de dados, por padrão é um tanto complicada. body-parser adicioná mais recursos facilitando o trabalho
  // https://www.npmjs.com/package/body-parser
  , bodyParser = require('body-parser');


// permitirá que a aplicação entenda requisições em JSON
app.use(bodyParser.json());

// permitirá que a aplicação entenda parâmetros via URL
app.use(bodyParser.urlencoded({ extended: false }));


module.exports = app;
