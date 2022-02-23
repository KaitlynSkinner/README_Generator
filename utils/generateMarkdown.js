// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'GNU AGPLv3' :
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'GNU GPLv3' :
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'GNU LGPLv3' :
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    case 'Mozilla Public License 2.0' :
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'Apache License 2.0' :
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT License' :
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Boost Software License 1.0' :
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'ISC License': 
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'The Unlicense' :
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    case 'No License Used.': 
      return `![License: No License Used](https://img.shields.io/badge/license-No%20License%20Used-purple.svg)`;
  }
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'No License Used.') {
    return '';
  } else {
    return `* [License](#license)`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if (license === 'No License Used.') {
      return '';
    } else {
      return `## License
  The license that was used for this application is:\n?
  ${license}
       `;
    }
};

// Function to create a User Story - if chosen
function renderUserStory(userStory) {

  if (userStory === 'false') {
    return '';
  } else {
    return `## User Story
${userStory}
     `;
  }
};

// Function to create Features - if chosen
function renderFeatures(features) {

  if (features === 'false') {
    return '';
  } else {
    return `## Features
${features}
     `;
  }
};

// Function to create Credits - if chosen
function renderCredits(credits) {

  if (credits === 'false') {
    return '';
  } else {
    return `## Credits
${credits}
     `;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}

  ${renderUserStory(data.userStory)}

  ## Table of Contents
  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Credits](#credits)
  * [How to Contribute](#howtocontribute)
  * [Tests](#tests)
  
  ${renderFeatures(data.features)}

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderCredits(data.credits)}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions please feel free to contact me.\n? 
  Email: ${data.email}\n?
  GitHub:  ${data.nameInput}

`;
}

module.exports = generateMarkdown;