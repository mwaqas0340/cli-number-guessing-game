#! /usr/bin/env node
import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 3 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess number(Remember! number will press between 1 - 3)",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratualation! you guessed a right number");
}
else {
    console.log("Sorry! you are type wrong number");
}