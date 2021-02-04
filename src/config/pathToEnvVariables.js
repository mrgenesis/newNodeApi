const { resolve } = require('path');
module.exports = {

  // Este é o caminho onde consta o arquivo com as variáveis de ambiente para desovolvimento em localhost
  pathToEnvVariables: resolve('localhost', '.env')
};
