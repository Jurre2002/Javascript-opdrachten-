const readlineSync = require('readline-sync');

let age = readlineSync.question('wat is jouw leeftijd? ');

for (let currentBirthday = 1; currentBirthday < age; currentBirthday++) {
  console.log('I never congratulated you when you became ' + currentBirthday);
}


while (true) {
    let a = readlineSync.question('Vul een nummer in: ');
    if (a.toLowerCase() === 'q') break;
  
    let b = readlineSync.question('Vul nog een nummer in: ');
    if (b.toLowerCase() === 'q') break;

    console.log(a + b);
}

