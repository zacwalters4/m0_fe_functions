// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askName() {
  console.log("Hello, what is your name?")
}
askName();
//changed function name to start with a verb and added a semi colon after the function is ran.


// EX 2:
function addThreeNums(first, second, third) {
//var sum = first + second + third
console.log(first + second + third);
}
addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//Removed the creation of the redundant sum variable

// // EX 3:
// console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
// console.log("Pulse basil and pine nuts");
// console.log("Add garlic and cheeses");
// console.log("Slowly pour in oil");
// console.log("Season");
function makeFreshPesto(){

var pestoSteps = [
  "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper",
  "Pulse basil and pine nuts",
  "Add garlic and cheeses",
  "Slowly pour in oil",
  "Season",
]
for(i = 0; i < pestoSteps.length; i++){
  console.log(`${i+1}: ` + pestoSteps[i]);
}

}

makeFreshPesto();
// I'm not sure if this method is actually any better, but it was good practice to change the mass amounts of console.log statements into a single one by creating an array and running a for loop to go through it
//
// //  EX 4:
function average(num1, num2)
  {
var avg = (num1 + num2)/2;
    //var avg = sum / 2;
console.log(`the average is: ${avg}.`);
  }

  average(46, 67);
  //fixed a syntax error and removed redundant variables
