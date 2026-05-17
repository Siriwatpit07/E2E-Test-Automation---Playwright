import { Page, expect, Locator }from '@playwright/test';
import { BasePage }from './BasePage';

export class ProductsPage extends BasePage {
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  }

  getProductCard(productName: string) {
    return this.page
      .locator('.inventory_item')
      .filter({hasText: productName});
  }

  async addProductToCart(productName: string) {
    const productCard = this.getProductCard(productName);
    await productCard.getByRole('button', {name: 'Add to cart'}).click();
  }

 async addMultipleProducts(products: string[]) {
    for (const product of products) {
      await this.addProductToCart(product);
    }
  }

  async verifyCartQuantity(quantity: string) {
    await expect(this.shoppingCartBadge).toHaveText(quantity);
    await this.shoppingCartBadge.click();
  }

}

