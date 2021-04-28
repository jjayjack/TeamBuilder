const Engineer  = require("../lib/Engineer");

describe("Engineer class", () => {
    it("should create a string of input", () => {
        const engineer = new Engineer("Chris", 24, "chris@c.me", "cChris");
        expect(engineer.name).toEqual("Chris");
        expect(engineer.id).toEqual(24);
        expect(engineer.email).toEqual("chris@c.me");
        expect(engineer.github).toEqual("cChris");
        expect(engineer.getRole()).toEqual("Engineer");

    })
})