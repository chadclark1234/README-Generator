// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./questions");
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

inquirer.prompt(questions).then((answers) => {
  const template = generateMarkdown(answers);
  console.log(template);
  generateFile(template);
});
function generateFile(data) {
  fs.writeFile("README.md", data, (err) =>
    err ? console.error("error") : console.log("Your ReadMe is complete!")
  );
}
