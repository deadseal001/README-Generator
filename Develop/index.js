// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const licenses=require('./utils/license-list.js');
const licenseName=['none']; 
licenses.forEach(element =>licenseName.push(element.a));


const questions =[
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
            name: 'contribution',
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
    ];

const promoptUser = ()=>{
    return inquirer.prompt(questions);
};


//badge info chosenLicense.b
//let chosenLicense=licenses.find(element=> element.a==='Apache 2.0 License');

//create new arr based on the answers
const newarr= arr =>{
    let newarr = [
        {
            a:'Title',
            b:arr.title
        },
        {
            a:'Description',
            b:arr.description
        },
        {
            a:'Installtion',
            b:arr.instinst
        },
        {
            a:'Usage',
            b:arr.usageinfo
        },
        {
            a:"Contributing",
            b:arr.contribution
        },
        {
            a: 'Tests',
            b:arr.tests
        },
        {
            a: 'License',
            b:arr.license
        },
        {
            a:'GitHub',
            b:arr.github
        },
        {
            a: 'Questions',
            b:arr.email
        }
    ];
    return newarr;
    }

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/README.md',data, err => {
            if (err) {
                reject (err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    promoptUser()
    .then(answers => {
        return newarr(answers)
    })
    .then(newArry => {
        return generateMarkdown(newArry);
    })
    .then(generatedMD => {
        return writeToFile(generatedMD);
    })
    .catch(err => {
        console.log(err);
    })
};

// Function call to initialize app
init();



