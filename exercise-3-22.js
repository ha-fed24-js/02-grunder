// 22a* Vad kommer följande kod att skriva ut?
for( let i=1; i<=6; i++ ) {  // rader
	let text = ''
	for( let j=1; j<= 8; j++ ) {  // kolumner
		let k = i + j
		if( k < 8 ) {
		// if( j === i + 2 ) {
		// if( i + j === 9 ) {
			text = text + '#'
		} else {
			text = text + '.'
		}
		// console.log(`i: ${i}, j: ${j}, i+j===${i+j}`)
	}
	console.log(text)
}

// j===8, i===1   j+i === 9
// j===7, i===2
// j===6, i===3
// j===5, i===4

/*
// "Varannat-beteende"
for( let i = 0; i<10; i++ ) {
	let x = i % 3  // kallas "modulo" eller "remainder" på engelska
	console.log(`i är: ${i} och x är: ${x}`)
}
*/