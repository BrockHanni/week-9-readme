const inquirer = require('inquirer');
const fs = require('fs');
inquirer

    .prompt([
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
        // Write the answers to a text file
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

## Table of Contents

List out the sections in your README file, and provide links to each section. This makes it easy for readers to find the information they're looking for. Some common sections to include are:

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Contributing/Contact](#contributing/Contact)
- [License](#license)
- [Deployment](#deployment)`
;
    
  fs.appendFile('README.md', data, (err) => {
    if (err) throw err;
    console.log('Answers saved to README.md');
  });
});
