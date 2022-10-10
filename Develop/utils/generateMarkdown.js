// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses=require('../../assets/license-list.js');
const badge = newArry => {
  let chosenLicense=licenses.find(element=> element.a===newArry[6].b);
    if (chosenLicense){
      return(chosenLicense.b);
    } else {
      return('');
    }
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let chosenLicense=licenses.find(element=> element.a===license);
  console.log(chosenLicense);
  let position= chosenLicense.b.search("svg");
  return(chosenLicense.b.substr(position+6, chosenLicense.b.length-position-7));
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (`This project is covered under [${license}](${renderLicenseLink(license)})`)
}

// TODO: Create a function to generate markdown for README
module.exports= newArry => {
  console.log(newArry);
  return `# ${newArry[0].b}
${badge(newArry)}
## Table of Contents
  ${newArry
    .filter((element)=> element.b.length>0)
    .map((b)=>{
      return`
  -[${b.a}](#${b.a})`
    })
    .join('')
  }
  
  ${newArry
    .filter((element)=> element.b.length>0)
    .map(({a,b}) => {
      switch (a) {
        case 'Title':
          break;
        case 'License':
          return `
## License
${renderLicenseSection(b)}

`;
          break;
        case 'GitHub':
          return `
## GitHub
My GitHub link: [https://github.com/${b}](https://github.com/${b})         

`;
          break;
        case 'Email':
          return `
## Questions
Please contact me by [${b}](mailto:${b}) for further questions. 

`;
          break;
        default:
          return `
## ${a}
${b}

`
      }
    })
    .join('')
  }

  
`
}

// module.exports = { generateMarkdown };
