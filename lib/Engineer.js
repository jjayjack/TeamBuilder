class Engineer extends Employee{
    constructor (github) {
        this.github = github
    };
//create function
    getGitHub(){
        return `${github}@github.com`;
    };
    getRole(){
        return "Engineer";
    }
}