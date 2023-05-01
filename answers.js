////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
  

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
const plantee = ["Plantee", "plant", 5000, "Mordor"];
plantee[2]++;

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
wolfy[3] = "Gotham City";

// Give D'Art a second hometown by adding "Hawkins"
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
dart.push("Hawkins");

// Porgee decides that Wolfy can't be named "Wolfy" anymore. 
// Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift();
wolfy.unshift("Gameboy");

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michelangelo"];

for (const turtle of ninjaTurtles) {
  console.log(turtle.toUpperCase());
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));

favMovies.sort();

console.log(favMovies);

const lastMovie = favMovies.pop();
console.log(lastMovie); 
console.log(favMovies); 

favMovies.push("Guardians of the Galaxy");

favMovies.reverse();
console.log(favMovies);

favMovies.shift(); 
console.log(favMovies); 

// The unshift method returns the new length of the array after the elements have been added to the beginning.  

const index = favMovies.indexOf("Django Unchained");
if (index !== -1) {
  favMovies.splice(index, 1, "Avatar");
}

const middleIndex = Math.floor(favMovies.length / 2);
const lastHalf = favMovies.slice(middleIndex);
console.log(lastHalf); 

console.log(favMovies.indexOf("Fast and Furious")); 
////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


