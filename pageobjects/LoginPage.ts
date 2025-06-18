import { Page, Locator } from '@playwright/test';

export class LoginPage {
    logInButton: Locator;
    userName: Locator;
    password: Locator;

    constructor(page: Page) {
        this.logInButton = page.getByRole('button', { name: 'Login' });
        this.password = page.getByRole('textbox', { name: 'enter your passsword' });
        this.userName = page.getByRole('textbox', { name: 'email@example.com' });
    }

    async login(email: string, password: string) {
        await this.userName.fill(email);
        await this.password.fill(password);
        await this.logInButton.click();
    }
}