// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {license}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}

`;
}

module.exports = generateMarkdown;



const inquirer = require("inquirer");
const fs = require("fs");

let readme = "";

const addLine = (line) => {
    readme += `${line}\n`;
};

const promptForTitle = () =>{
    inquirer
    .prompt([
        {
            type: "input",
            name: "Project Title",
            message: "What is the name of your Project Title? "
        },
    ])
    .then((answers) => {
            addLine(`#${answers.title}\n`);
            promptForDescription();
    })
};

const promptForDescription = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "Description",
                message: "Please, provide a short description explaining the W5H of your project:",
            },
        ])
        .then((answers) => {
            addLine(`# ${answers.description}\n`);
            promptForTableOfContents();
        });
};

const promptForTableOfContents = () => {
    inquirer
        .prompt([
            {
                type: "checkbox",
                name: "tableOfContents",
                message:
                    "Select the sections you want to include in your README.md file:",
                choices: [
                    "Installation Instructions",
                    "Usage Information",
                    "License",
                    "Contribution Guidelines",
                    "Test Instructions",
                    "Media",
                ],
            },
        ])
        .then((answers) => {
            if (answers.tableOfContents.length) {
                addLine("## Table of Contents\n");
                answers.tableOfContents.forEach((section) => {
                    addLine(`- [${section}](#${section.toLowerCase()})`);
                });
                addLine("\n");
            }
            promptForInstallation();
        });
};