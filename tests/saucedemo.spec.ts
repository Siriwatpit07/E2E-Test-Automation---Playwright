import { test } from '@playwright/test';
import { USERS, PRODUCTS, CART , Information} from '../test-data/testda';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { InformationPage } from '../pages/InformationPage';
import { OverviewPage } from '../pages/OverciewPage';
import { LogoutPage } from '../pages/LogoutPage';

test.describe('E2E Order Successfully', () => {

  test('E2E Order', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const informationPage = new InformationPage(page);
    const overviewPage = new OverviewPage(page);
    const logoutPage = new LogoutPage(page);

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
    await cartPage.clickCheckout();    
    await informationPage.addInformation(
      Information.first,
      Information.last,
      Information.zip,
    );  
    
    await overviewPage.overviewItem(
      PRODUCTS.backpack.name,
      PRODUCTS.backpack.desc,
      PRODUCTS.backpack.price
    );
    await overviewPage.overviewItem(
      PRODUCTS.bikeLight.name,
      PRODUCTS.bikeLight.desc,
      PRODUCTS.bikeLight.price  
    ); 
    await overviewPage.clickFinish();
    await overviewPage.clickBack();
    await logoutPage.clickBurgerMenu();
    await logoutPage.clickLogout();
  });


});