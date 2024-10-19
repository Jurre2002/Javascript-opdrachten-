const readlineSync = require('readline-sync');


let albumsOfTheYear = ["Below the waste", "Vif!", "Wall of eyes", "My Method actor", "Audio vertigo", "Gravity stairs", "Zwart/ Wit", "Heimwee", "Pulsar", "Spring"];

albumsOfTheYear.reverse();

// for (let i = 0; i < albumsOfTheYear.length; i++) {
//   console.log('Album of the year: ' + albumsOfTheYear[i]);
// }


let i = 0;
while(i < albumsOfTheYear.length) {
    console.log('Album of the year: ' + albumsOfTheYear[i])
      i++;
}