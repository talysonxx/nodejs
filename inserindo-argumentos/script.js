// modules imports
let calc = require('./modules/calc')
let toCheck = require('./modules/validator')

let args = process.argv
let spawn = start(args)

function start(args) {
  // a partir do 3° item
  let arguments = args.slice(2)
  if (toCheck(arguments)) return 'Argumento(s) inválido(s). Primeiro item deve ser ad, sub, div ou mult. Os outros 2 serão números.'

  // desestruturação do array (primeiro item é a)
  let [valueA, valueB] = arguments.slice(1)

  switch (arguments[0]) {
    case 'sum':
      return calc.sumFunc(Number(valueA), Number(valueB))
    case 'sub':
      return calc.subtractionFunc(Number(valueA), Number(valueB))
      case 'mult':
        return calc.multiplicationFunc(Number(valueA), Number(valueB))
    case 'div':
      return calc.divisionFunc(Number(valueA), Number(valueB))

    default:
      return 'Argumento(s) inválido(s). Primeiro item deve ser sum, sub, div ou mult. Os outros 2 serão números.'
  }
}
console.log(spawn)

// function toCheck(arguments) {
//   // não pode estar vazio. o primeiro tem que ser uma letra e os dois últimos obrigatoriamente um número
//   if (arguments == '' || !isNaN(arguments[0]) || isNaN(arguments[1]) || isNaN(arguments[2])) return true
// }

// function sumFunc(a, b) {
//   return `Soma: ${a + b}`
// }
// function subtractionFunc(a, b) {
//   return `Subtração por a - b: ${a - b} e b - a: ${b - a}`
// }
// function multiplicationFunc(a, b) {
//   return `Multiplição: ${a * b}`
// }
// function divisionFunc(a, b) {
//   return `Divisão por a / b: ${a / b} e b / a: ${b / a}`
// }







// // retorna índice dois pra frente
// let args = argsNodeFilter(process.argv)

// let spawn = soma(args)




// function operations(arg) {
//   switch (args.toLowerCase()) {
//     case 's':
//       sum()
//     case 'm':
//       mult()
//     case 'd':
//       div()
//     case 's':
//       sub()
//     default:
//       returnFunc()
//   }
// }

// function returnFunc() {
//   return 'Argumento(s) inválido(s)!'
// }

// function argsNodeFilter(arg) {
//   // slice(2) = pegando a partir do índice 2 até o final
//   return arg.slice(3).filter(item => !isNaN(Number(item))) 
// }
// function soma(arguments) {
//   if (arguments == '') return 'Argumento(s) inválido(s)'

//   let sum = 0
//   arguments.map(item => sum += Number(item))

//   return 'Soma: ' + sum
// }

// console.log(spawn)
// // console.log(args)
// // console.log(process.argv)
// // argumentos do node
// // console.log(process.argv)