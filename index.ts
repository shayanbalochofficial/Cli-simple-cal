#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a message
console.log("\n\tWelcome To \'Shayan Baloch\' - CLI Simple calculator \n");

const output = await inquirer.prompt([
  { message: "Please enter a number", type: "number", name: "num1" },
  { message: "Please enter another number", type: "number", name: "num2" },
  //! List of Operators
  {
    message: "Select what you want to do",
    type: "list",
    name: "function",
    choices: [
      "Addition",
      "Subtract",
      "Multiply",
      "Divide",
      "Modulus",
      "Average",
    ],
  },
]);

//! Where Code gets Easier. All logics are Applied here.
let addition = output.num1 + output.num2;
let subtract = output.num1 - output.num2;
let multiply = output.num1 * output.num2;
let divide = output.num1 / output.num2;
let avg = (output.num1 * output.num2) / 2;
let modulus = output.num1 % output.num2;

//! Operators Function Here
if (output.function === "Addition") {
  console.log("The sum of your values is ", addition);
} else if (output.function === "Subtract") {
  console.log("The remain of your values is ", subtract);
} else if (output.function === "Multiply") {
  console.log("The product of your values is ", multiply);
} else if (output.function === "Divide") {
  console.log("After division your value is ", divide);
} else if (output.function === "Modulus") {
  console.log("The remainder of your value when divided is ", modulus);
} else if (output.function === "Average") {
  console.log("The average of your value is ", avg);
} else {
  console.log(
    "We are really sorry, but we have limited operators. \nWe can't get what you expect."
  );
}

// console.log(`Thanks For Using our Calculator. \nIt's a project made by Shayan Baloch`);
console.log(
  "Thanks For Using our Calculator."
);
