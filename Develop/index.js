// Include required packages
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide examples on how to use your project:",
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the guidelines for contributing to this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the steps to run the tests for this project?",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use for this project?",
        choices: ["MIT", "Apache 2.0", "GPL v3", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("README file successfully created!");
    });
}

// Function to initialize the app
async function init() {
    console.log("Starting the README generator...");

    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);

    // Generate the README content
    let readmeContent = generatorMarkdown(answers);

    // Write the README file
    writeToFile("README.md", readmeContent);
}

// Call the init function to start the app
init();