describe('Assertions Demo', () => {
	before(function () {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
	});


	it('demo', () => {
		cy.get('.oxd-button')
			.should('contain', 'Login')
			.and('be.visible')
			.and('exist')

		cy.get('.oxd-button').click()

		cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
			.should('exist')
			.and('contain', 'Required')

		// cy.get('[id="submitLogin"]').should('contain', 'Button')
		// cy.get('[id="submitLogin"]').should('be.visible')
		// cy.get('[id="submitLogin"]').should('have-test', 'qweqw')
		// cy.get('[id="submitLogin"]').should('no.exist')

		// expect().to.be.equal()
	})
})