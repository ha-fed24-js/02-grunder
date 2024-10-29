// console.log('Hello world')

let variabel1
variabel1 = 1
let variabel2 = 2
// = betyder tilldelning
// == betyder jämförelse, villkor


/*let x, y;  // deklarera variabler
x = 1;  // tilldela variablerna värden
y = 0;

while (x <= 10) {
	y = y + x;
	x = x + 1;
}
let z = (2 * (3 - 5))

console.log(y)
*/

/*
let variabel3 = Number('123')
console.log( 'Talet är: ' + '1' + '2' + '3' )
console.log('Nästa tal: ' + (variabel3 + 1))

// `Talet är: ${variabel3}`
console.log(0.1 + 0.3)
console.log(0.1 + 0.2)
console.log((10 + 20) / 100)

let variabel4 = Number('Kalle')
console.log( variabel4 )
*/

// 11a Vad händer när koden körs?
let length = 130
if( length > 130 ) {
    console.log('Du får åka Balder!')
} else if( length == 130 ) {
	console.log('Sträck på dig så får du åka Balder!')
} else {
	console.log('Du får inte åka :(')
}

// while, for
let count = 0
while( count < 5 ) { 
	console.log('Loop', count)
	count++  // count = count + 1
}

for( let i=0; i < 5;  i++ ) {
	console.log('For-loop', i)
}

// Lägg ihop talen 1 till 10
let sum = 0
for( let x=1; x<=10; x++ ) {
	sum = sum + x
}
console.log('Summan är: ', sum)
