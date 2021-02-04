//Este quivo é o ponto de partida do aplicativo. Ele deve ser executado tanto em ambiente de desenvolvimento quanto em ambiente de produção.
//Antes da exucução do programa, é necessário definir as variáveis de ambiente para o correto funcionamento do aplicativo.
const app = require('./src/start')
  , port = process.env.PORT || 3000;

app.listen(port, () => console.log('>>> Running at port ' + port + '...'));
