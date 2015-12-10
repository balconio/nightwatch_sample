module.exports = {
	beforeEach : function(client){
		this.LoginPage = client.page.LoginPage().navigate();
	},

	after : function(client){
		client.end();
	},

	'addEmployeeNoDependentsNoDiscount' : function (client) {
		this.LoginPage
			.login()
			.addEmployee('Mike','Smith','')
			.assert.containsText('@benefitCost', '38.46', 'no dependents no discount benefitCost verified')
			.assert.containsText('@netPay', '1961.54', 'no dependents no discount netPay verified')
	},

		'addEmployeeNoDependentWithDiscount' : function (client) {
		this.LoginPage
			.login()
			.addEmployee('Alan','Avery','')
			.assert.containsText('@benefitCost', '34.62', 'no dependent with discount benefitCost verified')
			.assert.containsText('@netPay', '1965.38', 'no dependent with discount netPay verified')
	},

		'addEmployeeOneDependentNoDiscount' : function (client) {
		this.LoginPage
			.login()
			.addEmployee('Mike','Smith','1')
			.assert.containsText('@benefitCost', '57.69', 'one dependent no discount benefitCost verified')
			.assert.containsText('@netPay', '1942.31', 'one dependent no discount netPay verified')
	},


		'addEmployeeOneDependentWithDiscount' : function (client) {
		this.LoginPage
			.login()
			.addEmployee('Alan','Avery','1')
			.assert.containsText('@benefitCost', '51.92', 'one dependent with discount benefitCost verified')
			.assert.containsText('@netPay', '1948.08', 'one dependent with discount netPay verified')
	},

};