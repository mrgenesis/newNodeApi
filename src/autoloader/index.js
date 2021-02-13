/**
 * O objetivo deste arquivo é iniciar os recursos na sequencia correta.
 * O resultado será a exposição do app configurado com todos os recursos necessários diponíveis
 */
const
  path = require('path')
  , fs = require('fs');


// Este é um recurso que prove uma maneira de disponibilizar variáveis de ambiente localmente.
// Se o arquivo path/to/PROJECT/localhost/.env não existir, o aplicativo entenderá que as variáveis já foram providenciadas
require(path.join(__dirname, 'setEnvVariables'));

// Obtem a bibliotéca que lida com as requisições http com os recursos adicionais carreagados.
const app = require(path.join(__dirname, 'HTTPServer'));

//let t = fs.readdirSync(__dirname);
//t = t.filter(f => f[0] !== '.' && path.extname(f) === '.js' && f !== 'index.js')
const router = require('./router');

app.use(router);

module.exports = app;