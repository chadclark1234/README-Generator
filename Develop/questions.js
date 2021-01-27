// QUESTIONS FOR INQUIRER PROMPTS \\
const questions = [
  {
    type: "input",
    message: "What is the name of your application?",
    name: "name",
    validate: (value) => (value ? true : "Invalid entry, please try again"),
  },
  {
    type: "input",
    message: "Give a description of what your application is and how it works.",
    name: "description",
    validate: (value) => (value ? true : "Invalid entry, please try again"),
  },
  {
    type: "input",
    message:
      "What were some of the challenges you had to overcome when building this project?",
    name: "challenges",
    validate: (value) => (value ? true : "Invalid entry, please try again"),
  },
  {
    type: "input",
    message: "What is your GitHub repository URL?",
    name: "repositoryURL",
    validate: (value) => (value ? true : "Invalid entry, please try again"),
  },
  {
    type: "input",
    message: "What is the URL for your application?",
    name: "projectURL",
    validate: (value) => (value ? true : "Invalid entry, please try again"),
  },
  {
    type: "input",
    message: "Enter the file path for a screenshot or gif of your application?",
    name: "screenshot",
    validate: (value) => (value ? true : "Invalid entry, please try again"),
  },
  {
    type: "list",
    message: "Which license did you use?",
    name: "license",
    choices: ["MIT", "Apache", "GPL", "BSD", "NA"],
    validate: (value) => (value ? true : "Invalid entry, please try again"),
  },
  {
    type: "input",
    message:
      "Do you have any credits you want to add for any contributors to your project?",
    name: "credits",
    validate: (value) => (value ? true : "Invalid entry, please try again"),
  },
];

module.exports = questions;
