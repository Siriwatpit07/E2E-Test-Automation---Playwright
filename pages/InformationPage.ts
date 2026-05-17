import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';  

export class InformationPage extends BasePage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.zipCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'continue' });
  }

  async addInformation(firstName: string, lastName: string, zipCode: string) {
    console.log(await this.page.url());
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
    await this.continueButton.click();
  }

}