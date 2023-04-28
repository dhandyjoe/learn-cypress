describe('Basic keyword', () => {
	it('Orange HRM login', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

		cy.get('[name="username"]').type('Admin')
		cy.get('[name="password"]').type('admin123')
		cy.get('.oxd-button').click()

		cy.wait(5000)
	})

	// it('google page', () => {
	// 	cy.visit('https://www.google.com/')

	// 	cy.get('.gLFyf').type('automation step by step{Enter}')
	// })
})