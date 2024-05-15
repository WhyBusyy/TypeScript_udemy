"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private readonly id: string;
        //   private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        // this.id = "d2";
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees[2] = "Anna";
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Year and Report";
accounting.addReport("Somethings went wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printReport();
accounting.printEmployeeInformation();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=app.js.map