const path = require('path')
  , fs = require('fs')

  // Em produção, este caminho deve ser inexistente, porque a pasta 'localhost' é incluída no arquivo .gitignore.
  // Sendo assim, ele não não pe enviada para o servidor.
  , localhostEnvVariavels = path.resolve('localhost', '.env');


module.exports = {
  init() {
    // As definições das variáveis de ambiente ocorre de forma diferente dependendo do ambiente de execução do aplicativo.
    // Caso esteja sendo executado localmente - em desenvolvimento, é usada a biblioteca 'dotenv'.
    // O ambiente de produção deve fornecer recursos para definição de variáveis.
    if (fs.existsSync(localhostEnvVariavels)) {
      // Este 'if' só será verdadeiro para duas condições verdadeiras:
      // 1 - se o caminho existir no projeto: path/to//localhost/.env
      // 2 - precisa ser executado a partir da raiz do projeto: node src/init.js ou require('./src/init.js');
      require('dotenv').config({ path: localhostEnvVariavels });
    }
  }
}