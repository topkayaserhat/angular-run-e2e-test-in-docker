import { browser } from 'protractor';
import { LoginPage } from '../login/login.po';
import { SetupPage } from './setup.po';


describe('Setup page', () => {
    let loginPage: LoginPage;
    let page: SetupPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        page = new SetupPage();
        loginPage.navigateTo();
        let title = loginPage.login();
        browser.waitForAngular();
        expect(title).toEqual('setup');
    });

    it('SITE004 - Reply is exist', async () => {
     var element = page.getIonItemByIndex(0); // first item of the wizard.
     var textOfItem = await element.getText().then(function(text){
         return text
     });
     expect(textOfItem).toBe("SITE004 - Reply");
    
    });

    it('Click to first item. (SITE004 - Reply)', async () => {
        var firstItemOfList = page.getIonItemByIndex(0); // first item of the wizard.
        var EC = browser.ExpectedConditions;
       
        await browser.wait(EC.elementToBeClickable(firstItemOfList));
        browser.actions().mouseMove(firstItemOfList).click().perform();
        browser.waitForAngular();
        
        let image =   page.getImageElementOfFirstItem();
        image.click();
      
        let selectedItemTitleElement = page.getWizardTitleItem();
      
        var textOfTitle =  selectedItemTitleElement.getText().then(function(text){
            return text
        });
        expect(textOfTitle).toBe("SITE004 - Reply");
       });
});