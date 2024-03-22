#! /usr/bin/env node
import inqurier from "inquirer";
const asnwer = await inqurier.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the oprator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statment
if (asnwer.operator === "addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
}
else {
    console.log("output");
}
