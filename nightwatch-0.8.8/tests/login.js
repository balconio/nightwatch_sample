module.exports = {
	'Login' : function (client) {

		var username = 'testUser'
		var password = 'Test1234'

    client
    	.url('file:///C:/automation/nightwatch-0.8.8/New%20folder/login.html')
    	.setValue('.form-username', username)
        .setValue('.form-password', password)
        .click('button[id=btnLogin]')
        .assert.containsText('.page-header', 'Benefits Dashboard')
	},
};