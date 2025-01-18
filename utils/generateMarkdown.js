// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let link = "";

  if (license.length > 0) {
    link = `![Static Badge](https://img.shields.io/badge/License-${encodeURIComponent(
      license
    )}-blue)`;
  }

  return link;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";

  if (license.length > 0) {
    switch (license) {
      case "MIT":
        link = "[MIT License](https://mit-license.org/)";
        break;
      case "Apache License 2.0":
        link =
          "[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)";
        break;
      case "The Unlicense":
        link = "[The Unlicense](https://unlicense.org/)";
        break;
      case "GNU":
        link = "[GNU](https://www.gnu.org/licenses/gpl-3.0.en.html)";
        break;
      default:
        break;
    }
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";

  if (license.length > 0) {
    section = `
${renderLicenseLink(license)}
\`\`\`md
This application uses the ${license}, below is a link to the licenses website.
\`\`\`
`;
  }

  return section;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
  title,
  desc,
  install,
  usage,
  license,
  github,
  email,
}) => {
  return `# ${title}

${renderLicenseBadge(license)}

## Description

${desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

${install}

## Usage

${usage}

## Contributing

If you have Questions, please reach out to me via my github account, https://github.com/${github} or via email, ${email}.

## License

${renderLicenseSection(license)}
`;
};

export default generateMarkdown;
