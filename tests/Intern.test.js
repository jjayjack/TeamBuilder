const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("should return string of user input", () => {
        const intern = new Intern("Chris", 10, "chris@c.me", "Northwestern");
        expect(intern.name).toEqual("Chris");
        expect(intern.id).toEqual(10);
        expect(intern.email).toEqual("chris@c.me");
        expect(intern.school).toEqual("Northwestern");
        expect(intern.getRole()).toEqual("Intern");
    })
})