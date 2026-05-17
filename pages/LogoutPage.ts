import { Page, Locator  }from '@playwright/test';
import { BasePage }from './BasePage';

export class LogoutPage extends BasePage {
    readonly burgerMenu: Locator;
    readonly logoutMenu: Locator;

    constructor(page: Page) {
    super(page);
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logoutMenu = page.locator('#logout_sidebar_link')
    }
    async clickBurgerMenu() {
        await this.burgerMenu.click();
    }
    async clickLogout() {
        await this.logoutMenu.click();
    }
}

