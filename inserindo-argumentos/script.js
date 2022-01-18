// retorna índice dois pra frente
let args = argsNodeFilter(process.argv)

let spawn = soma(args)


function argsNodeFilter(arg) {
  // slice(2) = pegando a partir do índice 2 até o final
  return arg.slice(2).filter(item => !isNaN(Number(item))) 
}
function soma(arguments) {
  if (arguments == '') return 'Argumento(s) inválido(s)'

  let sum = 0
  arguments.map(item => sum += Number(item))

  return 'Soma: ' + sum
}

console.log(spawn)
// console.log(args)
// console.log(process.argv)
// argumentos do node
// console.log(process.argv)