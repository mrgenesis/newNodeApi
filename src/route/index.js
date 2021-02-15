const
  path = require('path')
  , fs = require('fs')
  , pathModules = path.join(__dirname, '..', '..', 'modules')

  // Este código vai à pasta modules e busca a lista de pastas que tem lá
  // https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
  , getModulesList = fs.readdirSync(pathModules, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)

module.exports = (router) => {

  if (getModulesList.length > 0) {
    getModulesList.map(folderModule => require(path.join(pathModules, folderModule))(router));
  }

  return router;
};