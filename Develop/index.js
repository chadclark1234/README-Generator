// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your application?",
      name: "name",
      validate: (value) => (value ? true : "Invalid entry, please try again"),
    },
    {
      type: "input",
      message:
        "Give a description of what your application is and how it works.",
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
      name: "applicationURL",
      validate: (value) => (value ? true : "Invalid entry, please try again"),
    },
    {
      type: "input",
      message:
        "Enter the file path for a screenshot or gif of your application?",
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
  ])
  .then(
    ({
      name,
      description,
      challenges,
      repositoryURL,
      applicationURL,
      screenshot,
      license,
      credits,
    }) => {
      const template = `## ${name}
  
  * [Description](#description)
  * [Challenges](#challenges)
  * [Repository URL](#repository URL)
  * [Application URL](#application URL)
  * [Credits](#credits)
  * [License](#license)
  
  ## Description
  ${description}
  ## Challenges
  ${challenges}
  ## Repository URL
  ${repositoryURL}
  ## Project URL
  ${applicationURL}
  ![](${screenshot})
  ## Credits
  ${credits}
  ## License
  ${license}
  `;
    }
  );
// inquirer.prompt(questions).then((Response) => {
//   console.log(Response);
//   mdGenerator(Response);
//   fs.writeFileSync("readme.md", mdGenerator(Response));

//   function mdGenerator({
//     name,
//     description,
//     challenges,
//     repositoryURL,
//     applicationURL,
//     screenshot,
//     license,
//     credits,
//   }) {
//     const template = `## ${name}

//   * [Description](#description)
//   * [Challenges](#challenges)
//   * [Repository URL](#repository URL)
//   * [Application URL](#application URL)
//   * [Credits](#credits)
//   * [License](#license)

//   ## Description
//   ${description}
//   ## Challenges
//   ${challenges}
//   ## Repository URL
//   ${repositoryURL}
//   ## Project URL
//   ${applicationURL}
//   ![](${screenshot})
//   ## Credits
//   ${credits}
//   ## License
//   ${license}
//   `;
//   }
// });
// .then((response) =>
//   response.confirm === response.password
//     ? console.log("Success!")
//     : console.log("You forgot your password already?!")
// )
