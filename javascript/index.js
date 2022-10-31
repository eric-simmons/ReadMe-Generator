import fs from 'fs'
import inquirer from 'inquirer';


const generateReadme = ({ title, description, screenshot, alttext, install, usage, license, username, email }) =>

    `# <${title}>
## Description
${description}
## Installation
${install}
## Screenshot
    ![${alttext}](${screenshot})
## Usage
${usage}
## License
${license}
## Contact
${username} on GitHub
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
        fs.writeFile("../output/newReadMe.md", readmeContent, (error) => {
            if (error) throw error
            else console.log("Successfully created your ReadMe!")
        })
    })