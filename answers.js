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


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


