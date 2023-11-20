// Function to return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
  
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  
  // Function to return the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
  
    return `[License](#license)`;
  }
  
  // Function to return the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
  
    return `## License
  
  This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more details.
  `;
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ${licenseBadge}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${licenseSection}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or email at ${data.email}.
  `;
  }
  export default generateMarkdown;
  //module.exports = generateMarkdown;
  
