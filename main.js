// import inquirer from "inquirer";
// import prompt from "inquirer/lib/ui/prompt";
// var prompt = require('prompt-sync')();
// get input from the user.
// var n = prompt('How many more times? ');
// console.log(n);
// // export{}
// CALCULATOR from PROMPT-SYNC
// var prompt = require('prompt-sync')();
// let n1 = parseInt(prompt('Please enter your first number:'));
// let n2 = parseInt(prompt('Please enter your second number:'));
// let operator = (prompt('Please enter your operator(+,-,*,/):'));
// if(operator == "+"){
//     console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 + n2}`)
// }
// else if(operator == "-"){
//     console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 - n2}`)
// }
// else if(operator == "*"){
//     console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 * n2}`)
// }
// else if(operator == "/"){
//     console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 / n2}`)
// }else{
//     console.log('please select the correct operator')
// }
// export{};
// CALCULATOR from INQUIRER
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Kindly select you first number"
    },
    {
        type: "number",
        name: "num2",
        message: "Kindly select your second number"
    },
    {
        type: "list",
        name: "operator",
        message: "select the operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
let result;
switch (answer.operator) {
    case "addition":
        result = answer.num1 + answer.num2;
        console.log(result);
        break;
    case "subtraction":
        result = answer.num1 - answer.num2;
        console.log(result);
        break;
    case "multiplication":
        result = answer.num1 * answer.num2;
        console.log(result);
        break;
    case "division":
        result = answer.num1 / answer.num2;
        console.log(result);
        break;
}
