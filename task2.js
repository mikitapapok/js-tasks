window.x = 1
const context = { x: 2 }
function testThis(y) {
  console.log(`x=${this.x}, y=${y}`)
}
testThis(100)
const boundFunction = testThis.bind(context)
console.log(boundFunction(100))
//task 2
function Robot(name) {
  this.name = name
}

function add(op1, op2) {
  this.name = this.name || 'Human'
  return this.name + ' can count to ' + (op1 + op2)
}
const voltron = new Robot('Voltron')
const nobody = new Robot('')
console.log(add.bind(nobody, 0, 1)())
console.log(add.call(voltron, 1, 2))
console.log(add.apply(voltron, [20, 30]))
