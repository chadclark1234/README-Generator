// GENERATE README.MD FUNCTION \\
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
