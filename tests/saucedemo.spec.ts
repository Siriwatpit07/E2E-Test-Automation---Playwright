import { test } from '@playwright/test';
import { USERS, PRODUCTS, CART} from '../test-data/testda';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Login Feature', () => {

  test('Login Success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login(
      USERS.standardUser.username,
      USERS.standardUser.password
    );
    await loginPage.verifyLoginSuccess();
    await productsPage.addMultipleProducts([
      PRODUCTS.backpack.name,
      PRODUCTS.bikeLight.name,
    ]);
    await productsPage.verifyCartQuantity(CART.quantity);
    await productsPage.verifyProductDetails(
        PRODUCTS.backpack.name,
        PRODUCTS.backpack.desc,
        PRODUCTS.backpack.price
      );

    await productsPage.verifyProductDetails(
        PRODUCTS.bikeLight.name,
        PRODUCTS.bikeLight.desc,
        PRODUCTS.bikeLight.price
      );

  });

});