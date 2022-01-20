module.exports = function toCheck(arguments) {
  // não pode estar vazio. o primeiro tem que ser uma letra e os dois últimos obrigatoriamente um número
  if (arguments == '' || !isNaN(arguments[0]) || isNaN(arguments[1]) || isNaN(arguments[2])) return true
}