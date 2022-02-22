
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// access functions in generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown.js');

// User specific questions - needed? merge with readmeQuestions
const userQuestions = () => {
    [
        {
            // GitHub Username
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Username!');
                    return false;
                }
            }
        },
        {
            // Email Address - needed? remove?
            type: 'input',
            name: 'email',
            message: 'Enter your Email Address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ]
};


// TODO: Create an array of questions for user input
const readmeQuestions = () => {
    console.log(`
    =================
    Add a New README.md
    =================
    `);

    return inquirer
        .prompt([
            //Begin 
            // Title of Application
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your application?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter the title of your application!');
                        return false;
                    }
                }
            },
            // User Story 
            {
                type: 'input',
                name: 'userStory',
                message: 'Provide a user story about your application.',
                validate: userStoryInput => {
                    if (userStoryInput) {
                        return true;
                    } else {
                        console.log('Please provide a user story for your application!');
                        return false;
                    }
                }
            },
            // Description 
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description about the application.\n? What was your motivation?\n? Why did you create this application?\n? What problem(s) does it solve?\n? What did you learn? ',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please provide a description about your application!');
                        return false;
                    }
                }
            },
            // Table of Contents - optional so confirm
            {
                type: 'confirm',
                name: 'tocQuestion',
                message: 'Do you wish to include a Table of Contents to your README?',
                default: true
            },
            {
                type: 'input',
                name: 'link',
                message: 'Provide a table of contents of the application. (optional)\n? Examples:\n? - Installation\n? - Usage\n? - Features. . .',
                // when method used to conditionally prompt a question based on the user's input
                when: ({ tocQuestion }) => {
                    if (tocQuestion) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            // Installation - optional so confirm
            {
                type: 'confirm',
                name: 'installQuestion',
                message: 'Do you wish to include Installation Steps to your README?',
                default: true
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide step by step instruction of how to install the application.',
                when: ({ installQuestion }) => {
                    if (installQuestion) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            // Usage - optional so confirm
            {
                type: 'confirm',
                name: 'usageQuestion',
                message: 'Do you wish to include your applications Usage to your README?',
                default: true
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide a short description and any examples for utilization\n? If you wish to include a screenshot, please upload it to an "assets/images" folder in your repository.\n? Then using the relative filepath, add it to your README.md file using the following syntax:\n? ```md\n?![alt text](assets/images/screenshot.png)\n?```',
                when: ({ usageQuestion }) => {
                    if (usageQuestion) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            // Credits - optional so confirm
            {
                type: 'confirm',
                name: 'creditsQuestion',
                message: 'Do you wish to include a Credits Section to your README?',
                default: true
            },
            {
                type: 'input',
                name: 'link',
                message: 'Please link any collaborators, and/or give credit to anyone involved in your application.',
                when: ({ creditsQuestion }) => {
                    if (creditsQuestion) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            // License - provide no license option 
            {
                type: 'input',
                name: 'checkbox',
                message: 'What license do you wish to use? (Check the license that would apply)',
                choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No License Used.']
            },
            // Badges - optional so confirm
            {
                type: 'confirm',
                name: 'badgesQuestion',
                message: 'Do you wish to include Badges to your README?',
                default: true
            },
            {
                type: 'input',
                name: 'checkbox',
                message: 'What badge do you wish to use? (Check the badge that would apply)',
                choices: ['', '', '', ''],
                when: ({ badgesQuestion }) => {
                    if (badgesQuestion) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            // Features
            {
                type: 'input',
                name: 'features',
                message: 'List and describe the feature of your application.',
            },
            // How to Contribute - optional so confirm
            {
                type: 'confirm',
                name: 'contributeQuestion',
                message: 'Do you wish to include a How To Contribute Section to your README?',
                default: true
            },
            {
                type: 'iput',
                name: 'contribute',
                message: 'Describe how to contribute to your application.',
                when: ({ contributeQuestion }) => {
                    if (contributeQuestion) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            // Tests - optional so confirm
            {
                type: 'confirm',
                name: 'testsQuestion',
                message: 'Do you wish to include Tests to your README?',
                default: true
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please list any tests for your application, as well as examples on how to run them.',
                when: ({ testsQuestion }) => {
                    if (testsQuestion) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
    if (err) throw err;

    //const answers =  
    console.log(data);
};

// TODO: Create a function to initialize app
function init() {
    //make sure keys are correct = 
    //console.log("Please hit 'RETURN/ENTER' to create a Professional README.md file. If you wish to exit please hit 'ESC'.");
    //allow an exit option = 
    //console.log('Are you sure you want to exit?');

    return inquirer.prompt(userQuestions, readmeQuestions);
};

// Function call to initialize app
init()
    .then(userQuestions)
    .then(readmeQuestions)
    .then(readmeData => {
        const readmePage = generateMarkdown(readmeData);

        await fs.promises.writeFile('./README.md', readmePage, err => {
            if (err) throw new Error(err);

            console.log('README page created! Check out README.md file to see!')
        });
    })
//.then(writeToFile)

// Keep this format here for now :
// message: '# Title of Application',

// message: '## User Story',

// message: '## Description',

// message: '## Table of Contents (optional)',

// message: '## Installation' (optional),

// message: '## Usage' (optional),

// message: '## Credits' (optional),

// message: '## License' (provide no license option),

// message: '## Badges' (optional),

// message: '## Features',

// message: '## How to Contribute' (optional),

// message: '## Tests' (optional),