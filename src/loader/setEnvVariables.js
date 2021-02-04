const { resolve } = require('path')
  , { existsSync } = require('fs')
  , getPathToEnvVariables = resolve('src', 'config', 'pathToEnvVariables')
  , { pathToEnvVariables } = require(getPathToEnvVariables);

// Em produção, a variável "pathToEnvVariables" deve apontar para "<PROJECT>/localhost/.env".
// Este caminha será inexistente em produção, porque a pasta 'localhost' é incluída no arquivo .gitignore.
// Sendo assim, ele não é enviado para o servidor.
// Neste caso, é necessário que a host forneça recursos para definição de variáveis de ambiente
if (existsSync(pathToEnvVariables)) {

  // Este 'if' só será executado se "path" deve existir no projeto
  require('dotenv').config({ path: pathToEnvVariables });

}
