
// Definiera en funktion
function greeting(name) {
	console.log('A new frontend student enters...')
	console.log(`Hello ${name}!`)
	console.log('_______________________')
	// 'Hello ' + name + '!'
}

// Anropa en funktion (eng. "call")
// greeting('Malahat')
// greeting('Pariya')
// greeting('Albin')


function nextValue(x) {
	// x är en lokal variabel
	// x finns bara inuti funktionen
	// console.log('nextValue: x är ', x)
	// console.log('nextValue: x+1 är ', x + 1)
	return x + 1
}

// value är en global variabel
let value = nextValue(1)
console.log( 'Jag fick: ' + value )
console.log( 'Jag fick: ' + nextValue(1) )

function changeValue() {
	// vi kan ändra value eftersom variabeln är global
	value++
}

changeValue()
changeValue()
console.log( 'Nu är value: ' + value )


let anon = function(x) {
	return x + 2
}
console.log( 'Anonym funktion. ' + anon(10) )


const next = x => x + 1
//           (x) => { return x + 1 }
//			 function(x) { return x + 1 }
console.log('Arrow function: next -> ', next(3))


// camelCase kallas det när varje ord utom det första inleds med stor bokstav
// function aSpecialKindOfFunction() {

// }

// "automatic semicolon insertion" - JavaScript lägger automatiskt till semikolon ; när det behövs
// Ctrl + ' (apostrof) för att kommentera flera rader