const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github
    };
//create function
    getGitHub(){
        return `${github}@github.com`;
    };
    getRole(){
        return "Engineer";
    }
};
module.exports = Engineer;