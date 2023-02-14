// Function to render the license badge
function renderLicenseBadge(license) {
  if (!license) {
      return "";
  }

  switch (license) {
      case "MIT License":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache License 2.0":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "GNU General Puplic License v3.0":
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "Mozilla Public License 2.0":
          return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      default:
          return "";
  }
}

// Function to render the license link
function renderLicenseLink(license) {
  if (!license) {
      return "";
  }

  switch (license) {
      case "MIT License":
          return "https://opensource.org/licenses/MIT";
      case "Apache License 2.0":
          return "https://opensource.org/licenses/Apache-2.0";
      case "GNU General Puplic License v3.0":
          return "https://www.gnu.org/licenses/gpl-3.0";
      case "Mozilla Public License 2.0":
          return "https://www.mozilla.org/en-US/MPL/2.0/";
      default:
          return "";
  }
}

// Function to render the license section of README
function renderLicenseSection(license) {
  if (!license) {
      return "";
  }

  return `## License:
  
  This project is licensed under the ${license} license.
  
  ${renderLicenseBadge(license)};
  ${renderLicenseLink(license)}`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description:
  ${data.description}
  
  ## Table of Contents:
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Test Instructions](#Test-Instructions)
  - [License](#License)
  - [Questions](#Questions)

  ## Installation Instructions:
  ${data.installation}
  
  ## Usage Instructions:
  ${data.usage}
  
  ## Contribution Guidelines:
  ${data.contribution}
  
  ## Test Instructions:
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions:
  For additonal questions or open feedback, feel free to contact me at my email:${data.email}. 
  You can also find me on Github at [${data.github}](https://github.com/${data.github}).
  
  © 2023 Confidential and Proprietary. All Rights Reserved.`;
}

module.exports = generateMarkdown;

