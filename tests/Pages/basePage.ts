import { Locator,Page,expect } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async clickOnElement(element:Locator){
    await element.click({ clickCount: 2 });
    await this.page.waitForTimeout(2000);
  }

  async typeTextIntoField(element:Locator, text:string){
    await element.fill(text);   
  }
  async verifyTextIsVisible(text: string) {
    await expect(this.page.locator(`text=${text}`)).toBeVisible();
    }
    
}

export { Locator };

