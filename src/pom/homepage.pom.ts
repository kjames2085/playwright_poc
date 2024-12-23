import { Page,expect } from "@playwright/test";

export default class Homepage {
    public page: Page;
    public constructor(page: Page) {
        this.page = page;

    }

    public async homepage(){
        await expect(this.page.getByRole('banner')).toContainText(/.*/);

    }
}