// importando módulo do próprio node
let fs = require('fs')

// nome do arquivos, conteúdo e callback de erro/sucesso
fs.writeFile('teste.txt', 'Sergio Moro', function(error) {
  if (error) console.log(error)
})