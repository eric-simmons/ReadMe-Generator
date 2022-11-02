import fs from 'fs'
import inquirer from 'inquirer';


const generateReadme = ({ title, description, screenshot, alttext, install, usage, contributing, test, license, username, email }) =>

`![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Contact](#Contact)


# <${title}>
## Description
${description}
## Installation
${install}
## Screenshot
![${alttext}](${screenshot})
## Usage
${usage}
## Contributing
${contributing}
## Testing
${test}
## License
${license}
## Contact
(https://www.github.com/${username} "Github")
${email}
`

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project"
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of your project"
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide a relative path to a screenshot of your program!"
    },
    {
        type: "input",
        name: "alttext",
        message: "Brief description of the image for Alternate Text?"
    },
    {
        type: "input",
        name: "install",
        message: "Describe installation process"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this project used?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What is the method for testing the program?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    },

])
    .then((answers) => {
        const readmeContent = generateReadme(answers)
        console.log(answers.license)
        fs.writeFile("../output/newReadMe.md", readmeContent, (error) => {
            if (error) throw error
            else console.log("Successfully created your ReadMe!")
        })
    })