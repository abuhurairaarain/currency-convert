#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    SAR: 3.75,
    AED: 3.67,
    INR: 83.30,
    PKR: 277.54,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "SAR", "AED", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "SAR", "AED", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let forAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / forAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
