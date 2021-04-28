const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("should create a string of input", () => {
        const manager = new Manager("Chris", 24, "chris@c.me", "12C");
        expect(manager.name).toEqual("Chris");
        expect(manager.id).toEqual(24);
        expect(manager.email).toEqual("chris@c.me");
        expect(manager.officeNumber).toEqual("12C");
        expect(manager.getRole()).toEqual("Manager");
    })
})