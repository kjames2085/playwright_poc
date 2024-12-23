import { test as mytest } from "@playwright/test";
import Launch from "../pom/launch.pom";
import Login from "../pom/login.pom";
import Homepage from "../pom/homepage.pom";


export const test = mytest.extend<{ launch: Launch, login: Login, homepage: Homepage }>({

    launch: async ({ page }, use) => {
        await use(new Launch(page))
    },
    login: async ({ page }, use) => {
        await use(new Login(page))
    },
    homepage: async ({ page }, use) => {
        await use(new Homepage(page));
    }

})