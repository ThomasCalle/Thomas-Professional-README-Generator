// Function to render the license badge
function renderLicenseBadge(license) {
  if (!license) {
      return "";
  }

  switch (license) {
      case "MIT License":
          return "License: MIT";
      case "Apache License 2.0":
          return "License";
      case "GNU General Puplic License v3.0":
          return "License: GPL v3";
      case "Mozilla Public License 2.0":
          return "License";
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

  return `## License
  
  This project is licensed under the ${license} license.
  
  ${renderLicenseBadge(license)}`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents:
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Test Instructions](#Test-Instructions)
  - [License](#License)
  - [Questions](#Questions)

  ${data.installation}
  
  Usage
  ${data.usage}
  
  Contributing
  ${data.contributing}
  
  Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  Questions
  For any questions, feel free to reach out to me at ${
      data.email
  }. You can also find me on Github at [${data.github}
  
  
  
  
](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;