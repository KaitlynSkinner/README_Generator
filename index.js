// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// access functions in generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const readmeQuestions = () => {
    console.log(`
    =================
    Add a New README.md
    =================
    `);

    return inquirer
        .prompt([
            //Begin This Application, or not 
            {
                type: 'input',
                name: 'begin',
                message: 'Please hit "RETURN/ENTER" to create a Professional README.md file. If you wish to exit please hit "Ctrl+C".',
            },
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
            // User Story - optional but included
            {
                type: 'input',
                name: 'userStory',
                message: 'What is your applications user story?',
                validate: userStoryInput => {
                    if (userStoryInput) {
                        return true;
                    } else {
                        console.log('Please enter the user story of your application!');
                        return false;
                    }
                }
            },
            // Description 
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description about the application. ',
                validate: description => {
                    if (description) {
                        return true;
                    } else {
                        console.log('Please provide a description about your application!');
                        return false;
                    }
                }
            },
            // Table of Contents - created dynamically

            // Installation
            {
                type: 'input',
                name: 'installation',
                message: 'Provide step by step instruction of how to install the application.',
                validate: installation => {
                    if (installation) {
                        return true;
                    } else {
                        console.log('Please provide steps to install your application!');
                        return false;
                    }
                }
            },
            // Usage
            {
                type: 'input',
                name: 'usage',
                message: 'Provide a short description and any examples for utilization. ',
                validate: usage => {
                    if (usage) {
                        return true;
                    } else {
                        console.log('Please provide utilization about your application!');
                        return false;
                    }
                }
            },
            // Credits - optional but included
            {
                type: 'link',
                name: 'credits',
                message: 'Please link any collaborators, and/or give credit to anyone involved in your application.',
                validate: creditsInput => {
                    if (creditsInput) {
                        return true;
                    } else {
                        console.log('Please enter a credits section. If none included none. Example:"This application does not have any collaborators at this time."');
                        return false;
                    }
                }
            },
            // License - provide no license option 
            {
                type: 'list',
                name: 'license',
                message: 'What license do you wish to use? ',
                // look up which GNU license is most popular and only use that one
                choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'ISC License', 'The Unlicense', 'No License Used.']
            },
            // Badges - created dynamically

            // Features - optional but included
            {
                type: 'input',
                name: 'features',
                message: 'List and describe the feature of your application.',
                validate: featuresInput => {
                    if (featuresInput) {
                        return true;
                    } else {
                        console.log('Please enter the features of your application section.');
                        return false;
                    }
                }
            },
            // How to Contribute
            {
                type: 'input',
                name: 'contribute',
                message: 'Describe how to contribute to your application.',
                validate: contribute => {
                    if (contribute) {
                        return true;
                    } else {
                        console.log('Please provide a  about your application!');
                        return false;
                    }
                }
            },
            // Tests 
            {
                type: 'input',
                name: 'tests',
                message: 'Please list any tests for your application, as well as examples on how to run them.',
                validate: tests => {
                    if (tests) {
                        return true;
                    } else {
                        console.log('Please provide a  about your application!');
                        return false;
                    }
                }
            },
            // Questions section consisting of GitHub UserName and Email Address for contact purposes
            // GitHub Username 
            {
                type: 'input',
                name: 'nameInput',
                message: 'What is your GitHub Username?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub Username!');
                        return false;
                    }
                }
            },
            // Email Address
            {
                type: 'input',
                name: 'email',
                message: 'Enter your Email Address.',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            }
        ]);
};


// Function call to write README file, and initialize app
readmeQuestions()
    .then(readmeData => {

        fs.writeFile('./README.md', generateMarkdown(readmeData), err => {
            if (err) throw new Error(err);

            console.log('README page created! Check out README.md file to see!')
        });
    })