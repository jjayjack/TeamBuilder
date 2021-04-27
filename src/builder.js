const inquirer = require('inquirer')
const employee = require ('./lib/Employee');
const engineer = require ('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const teamGen = require('./dist/team.js')

inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile('createdTeam.html', teamGen(response))
        )
class Team {
    constructor(){
        
    }
}