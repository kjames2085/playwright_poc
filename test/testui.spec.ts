import { test } from "../src/fixture/myfixture";
import Login from "../src/pom/login.pom";
import Launch from "../src/pom/launch.pom";
import Homepage from "../src/pom/homepage.pom";
import ENV from "../src/utlity/env";

let login: Login;
let launch: Launch;
let homepage: Homepage;
test('Orange HRM Login', async ({ launch, login, homepage }) => {
    await test.step('Launch the url', async () => {
        await launch.launch(ENV.url);
    })


    await test.step('Login into the Application', async () => {
        await login.login(ENV.username, ENV.password);

    })


    await test.step('Go to Hommepage', async () => {
        await homepage.homepage();

    })






})