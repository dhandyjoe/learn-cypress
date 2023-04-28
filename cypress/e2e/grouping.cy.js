describe('Basic keyword', () => {
	it.only('login with valid credential', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

		cy.get('[name="username"]').type('Admin')
		cy.get('[name="password"]').type('admin123')
		cy.get('.oxd-button').click()
	})

	it('login with invalid username', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

		cy.get('[name="username"]').type('qweqwe')
		cy.get('[name="password"]').type('admin123')
		cy.get('.oxd-button').click()

		cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
			.should('exist')
			.and('contain', 'Required')
	})

	it.skip('login with invalid password', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

		cy.get('[name="username"]').type('Admin')
		cy.get('[name="password"]').type('qweqwe')
		cy.get('.oxd-button').click()

		cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
			.should('exist')
			.and('contain', 'Required')
	})
})

describe('Create LMS', () => {
	it('Create LMS with fill mandatory field', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

		cy.get('[name="username"]').type('Admin')
		cy.get('[name="password"]').type('admin123')
		cy.get('.oxd-button').click()
	})
})