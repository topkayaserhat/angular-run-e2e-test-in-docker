import { browser, by, element } from 'protractor';

export class SetupPage {
    navigateTo() {
        return browser.get('/');
    }

    getPageTitleText() {
        return element(by.css('title ng-binding')).getText();
    }

    getIonItemByIndex(index: Number) {
        return element(by.id('site-list-item' + index));
    }

    getImageElementOfFirstItem(){
        return element(by.xpath('//html/body/ion-nav-view/ion-nav-view/ion-view/ion-content/div[1]/lea-wizard/div/lea-wizard-step[2]/div/div/div[1]/ion-slide[1]/img'));
    }

    getWizardTitleItem(){
        return element(by.css('.bar-subheader > .title'));
    }

}