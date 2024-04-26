import inquirer from "inquirer";
const ask = await inquirer.prompt([
    {
        name: "waightInKg",
        type: "number",
        message: "enter your waight in kg"
    },
    {
        name: "heightInMeters",
        type: "number",
        message: "enter your height in meters"
    }
]);
let bmi = ask.waightInKg / (ask.heightInMeters * ask.heightInMeters);
console.log(`Your bmi ${bmi}`);
