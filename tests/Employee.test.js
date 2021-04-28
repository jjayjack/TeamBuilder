const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("should create a string of input", () => {
        const employee = new Employee("Chris", 24, "chris@c.me");
        expect(employee.name).toEqual("Chris");
        expect(employee.id).toEqual(24);
        expect(employee.email).toEqual("chris@c.me")
    })
})