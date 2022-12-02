import Value from './value'
import Add from './add'
import Sub from './sub'

const A = Value(1)
const B = Value(2)
const C = Value(5)

console.log(Add(A,Add(C,B)).value)
console.log(Add(A, 100).value)
console.log(Sub(C, A).value)
console.log(Sub(Add(C, B), A).value)
console.log(Sub(100, 101).value)
console.log(Add(Sub(Add(C, B), A), 100).value)
