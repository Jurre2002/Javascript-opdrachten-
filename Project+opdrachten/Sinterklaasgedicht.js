//Versie 1 (Een gedicht (alinea schrijven) van een sinterklaas gedicht. De gebruiker vult een woord in en op basis daarvan wordt een woordt gegenereerd dat erop rijmt.)

// const readlineSync = require('readline-sync');


// const rijmOpties = {
// "maan": ["baan", "kraan", "slaan", "staan"],
// "zon": ["bron", "klon", "ton", "won"],
// "dag": ["vlag", "mag", "slag", "zag"],
// };


// function kiesRijmWoord(woord) {
//   if (rijmOpties[woord]) {
//     const opties = rijmOpties[woord];
//     const willekeurigIndex = Math.floor(Math.random() * opties.length);
//     return opties[willekeurigIndex];
//   } else {
//     return null;
//   }
// }

// function maakGedicht() {
   
//   const woord = readlineSync.question('Voer een woord in: ');
//   const rijmWoord = kiesRijmWoord(woord);
  
//   if (rijmWoord) {
//     console.log('Je gedicht:');
//     console.log(`In de nacht zie ik de ${woord},`);
//     console.log(`Naast een licht op de ${rijmWoord}.`);
//   } else {
//     console.log('Sorry, er zijn geen rijmwoorden beschikbaar voor dat woord.');
//   }
// }

// maakGedicht();

// Versie 2 (De zinnen willikeurig maken in het gedicht, zodat het steeds een ander ander gedicht wordt)

const readlineSync = require('readline-sync');


const rijmOpties = {
  "maan": ["baan", "kraan", "slaan", "staan"],
  "zon": ["bron", "klon", "ton", "won"],
  "dag": ["vlag", "mag", "slag", "zag"],
  "plek": ["gek", "trek", "nek"],
  "groot": ["schoot", "dood", "bloot", "noot",]

};

const zinOpties1 = ["In de verte klonk het geluid van een luide", "De jongen rende snel naar de oude", "Het water stroomde snel door de diepe", "De hond lag te slapen in zijn zachte",
    "De maan scheen helder boven het stille", "De bloemen bloeiden in de warme", "De jongen ontdekte een schat in het oude", "De leraar legde uit over de sterren en de"
 ];

const zinOpties2 = ["Terwijl de wind door de bomen zachtjes", "Om zich te verbergen achter een dikke", "En spoelde langs een grote, gladde", "Terwijl de kat sprong op een hoge",
    "En verlichtte het pad naar het oude", "En vulden de lucht met een zoete", "En danste van blijdschap op de groene", "Terwijl de leerlingen keken naar hun"
];

function kiesRijmWoord(woord) {
    if (rijmOpties[woord]) {
      const opties = rijmOpties[woord];
      const willekeurigIndex = Math.floor(Math.random() * opties.length);
      return opties[willekeurigIndex];
    } else {
      return null; 
    }
  }

function randomZin() {
    const ranZin1 = zinOpties1[Math.floor(Math.random() * zinOpties1.length)];
    const ranZin2 = zinOpties2[Math.floor(Math.random() * zinOpties2.length)];
    return [ranZin1, ranZin2];
}

function maakGedicht() {
 
  const woord = readlineSync.question('Voer een woord in: ');
  const rijmWoord = kiesRijmWoord(woord);
  
  if (rijmWoord) {
    const [zin1, zin2] = randomZin();
    
    console.log('Je gedicht:');
    console.log(`${zin1} ${woord},`);
    console.log(`${zin2} ${rijmWoord}.`);
  } else {
    console.log('Sorry, er zijn geen rijmwoorden beschikbaar voor dat woord.');
  }
}

maakGedicht();

//Versie 3 (Tot nu toe moet je een woord invullen dat overeenkomt met het woord in de array, maar in deze versie wordt er op basis van de laatste letters van het woord een rijmwoord gegenereerd)




