// 4a Vad skrivs ut av följande kod?
// let variabel1 = 32
// console.log(variabel1)

// 4b Ändra variabeln, så att koden skriver ut 32 i stället.

// 6
/*
let x = 'yellow'
console.log(x)
console.log('Färgen är: ' + x)
console.log('Färgen är: ', x)
console.log(`Färgen är: ${x}`)
console.log('Färgen är: yellow')
*/


// 15a Kör programmet. Vad skrivs ut?
let x = 2, y = 0
while( x <= 20 ) {
	y += x  // y = y + x
	x += 2  // x = x + 1 eller x += 1
	console.log('x är: ', x)
}
console.log('y är: ', y)

// 15b Ändra så att programmet lägger ihop talen 1 till 10 i stället.

// 15c Ändra så att programmet lägger ihop de jämna talen mellan 2 och 20.

let sum = 0
// Att göra: effektivisera loopen så den gör 10 varv i stället för 11
for( let i=0; i<=10; i++ ) {
	sum += i
	console.log('i är: ', i)
}
console.log('Summa: ', sum)
