# Thomas' Professional README.md Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description:
Creating an open source project on GitHub is important, so it is even more important to have a professional README.md file as it will ensure; clients, colleagues and employers understand the fundamental use and purpose of your application. The sole purpose of my project was to offer the GitHub community a solid application that would create ease by quickly generating a README.md file when using the command-line. Thus, allowing users among the GitHub community to save valuable time among their projects. Thereby, allowing them to optimize focus and efficency onto other priorities in order to achieve their goals.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview
## The Challenge:
Create an effective command-line runned application that in-takes a users input inorder to dynamically generate a professional README.md file that will have a clean, minimal and visually appealing format.

## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional 
README for a new project
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Usage Instructions
1. Open the cloned repository in a source code editor e.g. Visual Studio Code.
2. Open integrated terminal on index.js
3. Enter “node index.js” in the command line
4. Presented with npm inquirer questions through sequential order within the directory -  the user must provide essential README information in order to proceed to the next question in sequence.
5. Once completed a file named (Generated)README.md will be made.
6. At your discretion, you may rename the (Generated)README.md file to the file name of your choice.
7. (Optional) Regarding future use, you may alter the prompted questions within the index.js and generatedMarkdown.js to suit your needs.
8. (Optional) The (Generated)README.md file serves as a foundation so you are not limited to altering the file - once generated you may alter the document to your preferences just like any other README.md file.

### Solution URL: 
[Link:](https://thomascalle.github.io/Thomas-Professional-README-Generator/)
### Screenshot:
![](./images/Thomas'%20Professional%20README.md%20Generator.png)
### YouTube Video Walkthrough:
[Click Here To Watch](https://www.youtube.com/watch?v=_HxQkorZbcI&t=32s)

## Installation Process
1. Clone the repository: [Thomas-Professional-README-Generator](https://github.com/ThomasCalle/Thomas-Professional-README-Generator)
2. Install Node.JS [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
3. Open the cloned repository in a source code editor.
4. Open integrated terminal on index.js in order to run "npm i" on the command line to ensure that "node-modules" and "package.json" are operating on your local device.

## Built With
- Saiyan Pride
- JavaScript
- Node.js
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)
- Professional Guide: [README.md](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

## What I Learned
- Create an non-deployed application that invokes a “node index.js” command.

- Communication skills: created a visually understanding walkthrough  video demonstrating functionality based on BootCamp Video Submission Guidelines (and of course my own special touch).

- Organization: ensure the necessary folder documentation by creating “.gitignore” file to include: node_modules/ and .DS_Store/ so the node_modules directory isn't tracked/uploaded to GitHub.

### Continued Development:
1. Add Network and Social Media Badges.
2. Contniue creating more viable and effective functionality.
3. Add more generated sections such as: user story, acceptance criteria.
4. Create Accesability needs features: described audio/visual etc.

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

### Copyright © 2023 Thomas Calle
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

  
## Author

Follow me on Github at [ThomasCalle](https://github.com/ThomasCalle)! Additional questions or concerns? feel free to contact me at thomas.calle@outlook.com.

See you soon!

© 2023 [ThomasCalle](https://github.com/ThomasCalle). Confidential and Proprietary. All Rights Reserved.