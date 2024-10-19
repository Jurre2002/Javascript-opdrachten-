
const readlineSync = require('readline-sync');
let age = readlineSync.question('What is your age? ');
console.log ('Your age is: ' + age);
let age1 = readlineSync.question('What is your age?')
let age2 = readlineSync.question('What is your age?')
console.log ('Your age is: ' + age1);
console.log ('Your age is: ' + age2);
console.log (Math.abs(age1 - age2));

let root = readlineSync.question('typ een getal ')
console.log ('De root is: ' + Math.sqrt(root))


let age_1 = readlineSync.question('What is your age? ');
let age_2 = readlineSync.question('What is your age? ');
if (age_1 < age_2) {
	console.log ('age2 is bigger');	
}
else {
	console.log ('age1 is bigger');
}

if (age_1 < age_2) {
	console.log ('age2 is bigger');	
}
if (age_1 == age_2) {
    console.log ('you are the same age!')
}
else {
	console.log ('age1 is bigger');
}

    let a = readlineSync.question('Schrijf een getal? ')
    let b = readlineSync.question('Schrijf een getal? ')
    let akwadraat = a * a;
    let bkwadraat = b * b;
    let ckwadraat = akwadraat + bkwadraat;
    let c = Math.sqrt(ckwadraat);
    console.log(c);










