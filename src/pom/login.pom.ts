import { Locator, Page } from "@playwright/test";

export default class Login {

    public page: Page;
    public username_txtbox: Locator;
    public password_txtbox: Locator;
    public login_btn: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.username_txtbox = page.locator("[name='username']");
        this.password_txtbox = page.locator("[name='password']");
        this.login_btn = page.getByRole('button', { name: 'Login' });

    }

    public async login(username: string, password: string) {
        await this.username_txtbox.click();
        await this.username_txtbox.fill(username);
        await this.password_txtbox.click();
        await this.password_txtbox.fill(password);
        await this.login_btn.click();

    }
}