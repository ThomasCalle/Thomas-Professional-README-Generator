// Included packages required for this file.
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project Title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please, provide a short description explaining the W5H of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the guidelines for contributing to this project?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the steps to run the tests for this project?",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use for this project?",
        choices: ["MIT License", "Apache License 2.0", "GNU General Puplic License v3.0", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github Website Address",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// Function to write the README file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The README.md file has beeen successfully created!");
    });
}

// Function to initialize the app.
async function init() {
    console.log("Starting the README.md generator...");

    // Prompt the user for answers.
    const answers = await inquirer.prompt(questions);

    // Generate the README content.
    let readmeContent = generatorMarkdown(answers);

        // Write the README file.
        writeToFile("README.md", readmeContent);
}

// Call the init function to start the app.
init();