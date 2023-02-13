// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

const promptForTitle = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "#Project Title",
        message: "What is the name of your Project Title? ",
      },
    ])
    .then((answers) => {
      addLine(`#${answers.title}\n`);
      promptForDescription();
    });
};

const promptForDescription = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "##Description",
        message:
          "Please, provide a short description explaining the W5H of your project:",
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
        name: "##Table of Content",
        message:
          "Select the options you would like to include in your README.md file:",
        choices: [
          "[Installation Instructions](#Installation Instructions)",
          "[Usage Information](#Usage Information)",
          "[Contribution Guidelines](#Contribution Guidelines)",
          "[Test Instructions](#Test Instructions)",
          "[License](#License)",
          "[Questions](#Questions)",
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
const promptForInstallation = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Installation Instructions",
        message: "What are the steps required to install your project? Provide a step-by-step description:",
      },
    ])
    .then((answers) => {
      if (answers.installation) {
        addLine("## Installation\n");
        addLine(`${answers.installation}\n`);
      }
      promptForUsage();
    });
};

const promptForUsage = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Usage Information",
        message: "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md ![alt text](assets/images/screenshot.png)```:",
      },
    ])
    .then((answers) => {
      if (answers.usage) {
        addLine("## Usage\n");
        addLine(`${answers.usage}\n`);
      }
      promptForLicense();
    });
};

const promptForLicense = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "license",
        message: "Enter the license information for your project:",
      },
    ])
    .then((answers) => {
      if (answers.license) {
        addLine("## License\n");
        addLine(`${answers.license}\n`);
      }
      promptForContribution();
    });
};

const promptForContribution = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "contributions",
        message: "Enter the contribution guidelines for your project:",
      },
    ])
    .then((answers) => {
      if (answers.contributions) {
        addLine("## Contributions\n");
        addLine("${answers.contributions}\n");
      }
      promptForTests();
    });
};

const promptForTests = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "tests",
        message: "Enter the test instructions for your project:",
      },
    ])
    .then((answers) => {
      if (answers.tests) {
        addLine("## Tests\n");
        addLine("${answers.tests}\n");
      }
      promptForMedia();
    });
};

const promptForMedia = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "media",
        message:
          "Enter the file paths of any media you'd like to include in your README (separated by a comma):",
      },
    ])
    .then((answers) => {
      if (answers.media) {
        const media = answers.media.split(",");
        if (media.length) {
          addLine("## Media\n");
          media.forEach((file) => {
            if (
              file.endsWith(".png") ||
              file.endsWith(".jpg") ||
              file.endsWith(".jpeg")
            ) {
              addLine(![image]("${file.trim()}"));
            } else if (file.endsWith(".mp4") || file.endsWith(".gif")) {
              addLine(
              `<video
              src="${file.trim()}"
              width="320"
              height="240"
              controls
            ></video>`
              );
            }
          });
          addLine("\n");
        }
      }
      writeReadme();
    });
};

const writeReadme = () => {
  fs.writeFile("README.md", readme, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md successfully generated!");
    }
  });
};

promptForTitle();
message.txt;
