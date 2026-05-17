import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage  {
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    // async verifyCartItems(productName: string, expectedDescription: string, expectedPrice: string) {
    //     const productCard = this.page
    //         .locator('.cart_item')
    //         .filter({ hasText: productName });
    //     const productTitle = productCard.locator('.inventory_item_name');
    //     const productDescription = productCard.locator('.inventory_item_desc');
    //     const productPrice = productCard.locator('.inventory_item_price');
    //     await expect(productTitle).toHaveText(productName);
    //     await expect(productDescription).toHaveText(expectedDescription);
    //     await expect(productPrice).toHaveText(expectedPrice);
    // }
    async clickCheckout() {
        await this.checkoutButton.click();
    }
}   