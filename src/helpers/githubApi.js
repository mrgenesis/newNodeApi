const requester = require('../vendor/requester')
  , GH_PERSONAL_ACCESS_TOKEN = process.env.GH_PERSONAL_ACCESS_TOKEN;

module.exports = requester(function (config) {

  // Para este aplicativo se manter estável e compativel com atualizações futuras, é preciso 
  // especificar a versão no cabeçalho Accept
  // @see https://docs.github.com/pt/rest/overview/media-types
  config.headers.common.Accept = 'application/vnd.github.v3+json';

  // É necessário gerar um token no github e tornar disponível no ambiente do aplicativo
  // Se estiver executando em desenvolvimento, edite o arquivo .env em path/to/project/localhost/.env
  // @see https://github.com/settings/tokens/new?scopes=repo
  config.headers.common['Authorization'] = `token ${GH_PERSONAL_ACCESS_TOKEN}`;

  return config;
});