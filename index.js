// TODO: Include packages needed for this application
import fs, { read } from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  "Please enter the title of the application:",
  "Please enter your description:",
  "Please enter the installation instructions:",
  "Please enter usage information:",
  "Which License are you using?",
  "Please enter your github username:",
  "Please enter your email:",
];

// TODO: Create a function to write README file
function writeToFile(fileName, results) {
  fs.writeFile(fileName, results, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

// TODO: Create a function to initialize app
function init() {}

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
    },
    {
      type: "input",
      message: questions[1],
      name: "desc",
    },
    {
      type: "input",
      message: questions[2],
      name: "install",
    },
    {
      type: "input",
      message: questions[3],
      name: "usage",
    },
    {
      type: "list",
      message: questions[4],
      name: "license",
      choices: ["MIT", "Apache License 2.0", "The Unlicense", "GPL", "GNU"],
    },
    {
      type: "input",
      message: questions[5],
      name: "github",
    },
    {
      type: "input",
      message: questions[6],
      name: "email",
    },
  ])
  .then((results) => {
    const readmeContent = generateMarkdown(results);

    writeToFile("output/README.md", readmeContent);
  });
// Function call to initialize app
init();
