var loginCommands ={

  login : function(){
        this
        .setValue("@username", 'testUser')
        .setValue("@password", 'Test1234')
        .click('button[id=btnLogin]')
        .assert.containsText('.page-header', 'Benefits Dashboard', 'Dashboard Loaded');
    return this.api.page.DashboardPage();
  }
}

module.exports = {
  commands: [loginCommands],
  url: function(){
    return this.api.launchUrl + "/login.html";
  },

  elements: {
    username: { selector: '.form-username' },
    password: { selector: '.form-password' }
  }
}
