// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMD({
  name,
  description,
  challenges,
  repositoryURL,
  projectURL,
  screenshot,
  license,
  credits,
}) {
  return `## ${name}

  ![ProjectPic](https://img.shields.io/badge/LICENSE-${license}-blue)

  ## Table Of Contents
  * [Description](#description)
  * [Challenges](#challenges)
  * [Repository URL](#repository-URL)
  * [Project URL](#project-URL)
  * [Project Glimpse](#Project-Glimpse)
  * [Credits](#credits)
  * [License](#license)
  
  ## Description
  ${description}
  ## Challenges
  ${challenges}
  ## Repository URL
  [Repository Link](${repositoryURL})
  ## Project URL
  
  [Project Link](${projectURL})
  ## Project Glimpse

  ![ProjectPic](${screenshot})
  ## Credits
  ${credits}
  ## License
  ${license} `;
}

module.exports = generateMD;
