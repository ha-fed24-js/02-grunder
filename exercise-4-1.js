// 4.1d
/*
let x = 2;
let y = 3
let fx = foo(x)
// console.log('foo(x) === ', fx)
let fy = foo(y)
// console.log('foo(y) === ', fy)
let a = foo(fx + fy)
console.log(a);

function foo(i) {
    return 5 * i;
}
*/

// 4.1e
/*
let a = 5;  // global variabel
function foo(a) {  // parametern är en lokal variabel
    a++;  // lokala variabeln a skymmer den globala variabeln a
	console.log('Inuti foo: ' + a)
}
console.log('Utanför foo: ' + a)
foo(a)
console.log('Utanför foo: ' + a)
a += 2;
console.log(a);
*/

// 1f
let foo = function(i) {
    return 2*i*i;
};
let goo = function(x, y) {
	// Parametrar: x===foo, y===3
    return x(y);  // anropa funktionen "x" med "y" som parameter: foo(3)
};
let a = goo(foo, 3);
console.log(a);
