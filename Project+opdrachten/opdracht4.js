const readlineSync = require('readline-sync');

let a = readlineSync.question('What is your age? ')
let maxHeart = 220.0;
let targetheartmin = (maxHeart - a) * 0.50;
let targetheartmax = (maxHeart - a) * 0.85;
if (a > 0 ) {
    console.log('jouw maximale hartslag is: ' + (maxHeart - a));
    console.log('jouw gerichte minimale hartslag is: ' + targetheartmin);
    console.log('jouw gerichte maximale hartslag is: '+ targetheartmax);
 }