const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./questions");

// INQUIRER PROMISE EXECUTED AFTER PROMPTS W/ QUESTIONS \\
inquirer.prompt(questions).then((answers) => {
  const template = generateMarkdown(answers);
  console.log(template);
  generateFile(template);
});

// FS WRITE THE ANSWERS TO TEMPLATE \\
function generateFile(data) {
  fs.writeFile("README.md", data, (err) =>
    err ? console.error("error") : console.log("Your ReadMe is complete!")
  );
}
