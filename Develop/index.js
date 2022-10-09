// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const licenses=require('../assets/license-list.js');
const licenseName=['none']; 
licenses.forEach(element =>licenseName.push(element.a));
licenseName.push('Others');
const questions = ()=>{
    return inquirer.prompt([
        {
            type:'input',
            name:'title',
            message: 'Please Enter the Title of the Project (Required)',
            validate: titleInput =>{
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please Enter the Title of the Project!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            message:'Please Enter the Description of the Project:',
            validate: descriptionInput =>{
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please Enter the Description of the Project!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'instinst',
            message:'Please Enter the Installation Instructions:'
        },
        {
            type: 'input',
            name: 'usageinfo',
            message: 'Please Enter the Ussage Informations:'
        },
        {
            type: 'input',
            name: 'contibution',
            message: 'Please Enter the Contribution GuideLines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please Enter the Test Instructions'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please Choose the License of the Project:',
            choices: licenseName
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                return true;
                } else {
                console.log('Please enter your GitHub username!');
                return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: 'Please Enter your Email:'

        }
    ]);
};


//badge info chosenLicense.b
//let chosenLicense=licenses.find(element=> element.a==='Apache 2.0 License');


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
console.log(licenseName);
console.log(chosenLicense.b);
