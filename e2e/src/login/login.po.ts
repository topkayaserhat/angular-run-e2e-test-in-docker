import { browser, by, element } from 'protractor';

export class LoginPage {
   
    private credentias = {
        username: 'test.t',
        password: '3edc.4rfvC'
      };

    navigateTo(){
        return browser.get('mobile/reply/#/auth/login');
    }
    getUsernameTextbox() {
        return element(by.name('username'));
       }
    getPasswordTextbox() {
        return element(by.name('password'));
    }

    getLoginButton() {
        return element(by.id('login-button'));
    }

    fillCredentials(credentias: any = this.credentias) {
        this.getUsernameTextbox().sendKeys(credentias.username);
        this.getPasswordTextbox().sendKeys(credentias.password);
    }

    async login(){
        this.fillCredentials();
        let signInButton = this.getLoginButton();
        var EC = browser.ExpectedConditions;
        await browser.wait(EC.elementToBeClickable(signInButton));
        signInButton.click();
        return browser.getTitle().then(function (webpagetitle) {
            return webpagetitle;
        });
    }
}
