import { Page } from "@playwright/test";

export default class Launch{

    public page: Page;
    public constructor(page: Page){
        this.page = page;
    }

    public async launch(url: string){
        await this.page.goto(url);

    }
}