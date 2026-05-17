import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class OverviewPage extends BasePage  {
    readonly FinishButton: Locator;
    readonly BacktoHomeButton: Locator;

    constructor(page: Page) {
        super(page);
        this.FinishButton = page.getByRole('button', { name: 'Finish' });
        this.BacktoHomeButton = page.getByRole('button', { name: 'Back Home' });
    }

    async overviewItem(productName: string, expectedDescription: string, expectedPrice: string) {
        const productCard = this.page
            .locator('.cart_item')
            .filter({ hasText: productName });
        const productTitle = productCard.locator('.inventory_item_name');
        const productDescription = productCard.locator('.inventory_item_desc');
        const productPrice = productCard.locator('.inventory_item_price');
        await expect(productTitle).toHaveText(productName);
        await expect(productDescription).toHaveText(expectedDescription);
        await expect(productPrice).toHaveText(expectedPrice);
    }
    async clickFinish() {
        await this.FinishButton.click();
    }
    async clickBack() {
        await this.BacktoHomeButton.click();
    }
}   