const inquirer = require('inquirer')
const employee = require ('../lib/Employee');
const engineer = require ('../lib/Engineer');
const intern = require('../lib/Intern');
const manager = require('../lib/Manager');
const teamGen = require('../dist/team.js')
const teamMem = [];
const fs = require('fs');

const questions = [
    {
        type: 'list',
        name: 'title',
        message: "What is your position?",
        choices: ['Engineer', 'Intern', 'Manager', 'None to add'],
        default: 'Employee',
    },
    {
        type: 'name',
        name: 'name',
        message: "What is your name?",
        when: function(data){
            if(data.title == 'None to add'){
                return false;
            } return true
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your id?",
        when: function(data){
            if(data.title == 'None to add'){
                return false;
            } return true
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
        when: function(data){
            if(data.title == 'None to add'){
                return false;
            } return true
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub?',
        when: function (data) {
            if (data.title == 'Engineer') {
                return true;
            };
            return false;
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your Office location?',
        when: function (data) {
            if (data.title == 'Manager') {
                return true;
            };
            return false;
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do you attend?',
        when: function (data) {
            if (data.title == 'Intern') {
                return true;

            };
            return false;
        }
    },

]

function addTeam() {
    inquirer
        .prompt(questions)
        .then((response) => {
            if (response.title !== "None to add") {
                switch (response.title){
                    case "Engineer": 
                    let dweeb = new engineer(response.name, response.id, response.email, response.github); 
                        teamMem.push(dweeb);
                        break;
                    case "Intern":
                    let unknown = new intern(response.name, response.id, response.email, response.school);
                        teamMem.push(unknown);
                        break;
                    case "Manager":
                    let unqualified = new manager(response.name, response.id, response.email, response.officeNumber);
                        teamMem.push(unqualified);
                        break;
                };
                addTeam();
            } else {
                writeToFile('dist/createdTeam.html', teamGen(teamMem));
            }
        })
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err){
        if (err) return console.log(err);
        console.log(data);
    })
}

module.exports = addTeam;
