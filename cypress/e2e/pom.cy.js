import { LoginPage } from "./page/login_page";

const loginPage = new LoginPage();

function randomString() {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < 10) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

describe('POM', () => {
	it('sauce demo login', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

		loginPage.enterUsername('Admin')
		loginPage.enterPassword(randomString())
		loginPage.clickLogin()

		cy.wait(5000)
	})

	// it('google page', () => {
	// 	cy.visit('https://www.google.com/')

	// 	cy.get('.gLFyf').type('automation step by step{Enter}')
	//  })
})