
let a = 123
let b = '456'
let c = 789
let d = c > a
let e = '123'

console.log( 'a är: ', (typeof a) )
console.log( 'b är: ', (typeof b) )
console.log( 'c är: ', (typeof c) )
console.log( 'd är: ', (typeof d) )
console.log( 'e är: ', (typeof e) )

console.log( `${a} == ${e}  -> ${a == e} ` )
console.log( `${a} === ${e} -> ${a === e} ` )
// tre lika med-tecken är en strikt jämförelse - måste vara samma datatyp
// Använd hellre ===

let e2 = Number(e)
console.log( `${a} === ${e2} -> ${a === e2} (efter typomvandling)` )
