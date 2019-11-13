import { browser, by, WebElementPromise, ExpectedConditions } from 'protractor';
import { LoginPage } from '../login/login.po'

describe('Login tests', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
    });

    it('Login form test with valid credentials.', async () => {
        var title = await page.login();
        browser.waitForAngular();
        expect(title).toEqual('setup');
    });
});