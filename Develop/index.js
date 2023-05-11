const inquirer = require('inquirer');
const fs = require('fs');
// calling inquirer to prompt user for input
inquirer
    .prompt([
      // prompts for user input
        {
          type: 'input',
          message: 'Enter the title',
          name: 'Title',
        },
        {
          type: 'input',
          message: 'Description:',
          name: 'Description',
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'Install',
          },
          {
            type: 'input',
            message: 'Usage Instructions:',
            name: 'Usage',
          },
          {
            type: 'input',
            message: 'How to test your project:',
            name: 'Test',
          },
          {
            type: 'input',
            message: 'Licenses used:',
            name: 'license',
          },
          {
            type: 'input',
            message: 'Insert your GitHub URL',
            name: 'GitHub',
          },
          {
            type: 'input',
            message: 'Github Username:',
            name: 'GitHubUser',
          },
          {
            type: 'input',
            message: 'Email Address:',
            name: 'Email',
          },
      ])
      .then((answers) => {
        // Write the answers to a text file of a formatted pre-created README.md
        const data = 
`# ${answers.Title}

${answers.Description}

## Installation

${answers.Install}

## Usage

${answers.Usage}

## Test

${answers.Test}

## Contributing/Contact

To submit bug reports, feature requests, or pull requests, please email me at ${answers.Email}, or visit my GitHub page: ${answers.GitHubUser}(https://github.com/${answers.GitHubUser})

## License

Licenses used: ${answers.license}

## Deployment

${answers.GitHub}

## Screenshots

INSERT SCREENSHOTS HERE

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Contributing/Contact](#contributing/Contact)
- [License](#license)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Table of Contents](#table-of-contents)
`
;
    
  fs.appendFile('../README.md', data, (err) => {
    if (err) throw err;
    console.log('Answers saved to README.md');
  });
});
