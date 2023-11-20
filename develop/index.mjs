// Include packages needed for this application
import fs from 'fs';
//const fs = require('fs');
import inquirer from 'inquirer';
//const inquirer = require('inquirer');
import generateMarkdown from './utils/generatorMarkdown.mjs'
//const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'Unlicense'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} has been generated successfully!`);
  });
}

// Function to initialize app
function init() {
  // Prompt the user for input
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content
    const readmeContent = generateMarkdown(answers);

    // Write the content to README.md
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();

