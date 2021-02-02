//Este quivo é o ponto de partida do aplicativo. Ele deve ser executado tanto em ambiente de desenvolvimento quanto em ambiente de produção.
//Antes da exucução do programa, é necessário definir as variáveis de ambiente para o correto funcionamento do aplicativo.

const path = require('path')
  , fs = require('fs')

  // Em produção, este caminho deve ser inexistente, porque a pasta 'localhost' é incluída no arquivo .gitignore.
  // Sendo assim, ele não não pe enviada para o servidor.
  , localhostEnvVariavels = path.resolve('localhost', '.env');


// As definições das variáveis de ambiente ocorre de forma diferente dependendo do ambiente de execução do aplicativo.
// Caso esteja sendo executado localmente - em desenvolvimento, é usada a biblioteca 'dotenv'.
// O ambiente de produção deve fornecer recursos para definição de variáveis.
if (localhostEnvVariavels) {
  require('dotenv').config({ path: localhostEnvVariavels });
}
