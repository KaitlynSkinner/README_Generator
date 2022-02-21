// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("In the below format:, please update <label>, <message>, and <color> to include the text and color you wish!");
  console.log("https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>");
  console.log("Please replace any spaces with '%20'.")

  // https://shields.io/
  //Options :
    //GNU AGPLv3 - https://img.shields.io/badge/license-GNU%20AGPLv3-green
    //GNU GPLv3
    //GNU LGPLv3
    //Mozilla Public License 2.0
    //Apache License 2.0
    //MIT License - https://img.shields.io/badge/license-MIT-green
    //Boost Software License 1.0
    //The Unlicense
    //No License
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Options :
  //GNU AGPLv3
  //GNU GPLv3
  //GNU LGPLv3
  //Mozilla Public License 2.0
  //Apache License 2.0
  //MIT License
  //Boost Software License 1.0
  //The Unlicense
  //No License

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
