var dashboardCommands ={

  addEmployee : function(firstname, lastname, dependent_count){
    this
        .click("@addEmpButton")
        .clearValue("@firstName")
        .setValue("@firstName", firstname)
        .setValue("@lastName", lastname)
        .setValue("@dependents", dependent_count)
        .click("@submitButton")
        .assert.containsText('.page-header', 'Benefits Dashboard', 'Employee Saved');
    return this;
  },

  deleteEmployee : function(){
    this.click("@deleteButton")
    return this;
  }
}

module.exports = {
  commands: [dashboardCommands],
  elements: {
    addEmpButton: { selector: 'button[id=btnAddEmployee]' },
    firstName: { selector: '#firstname' },
    lastName: { selector: '#lastname' },
    dependents: { selector: '#dependents' },
    submitButton: { selector: '#addEmployee' },
    benefitCost: { selector: '//*[@id="employee-table"]/tbody/tr[2]/td[7]', locateStrategy: 'xpath'},
    netPay: { selector: '//*[@id="employee-table"]/tbody/tr[2]/td[8]', locateStrategy: 'xpath'},
    deleteButton: {selector: '#btnDelete'}
  }
}
