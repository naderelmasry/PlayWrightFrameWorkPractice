import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class productsPage extends BasePage {
    readonly products_link=this.page.locator("//a[@href='/products']");
    readonly viewProduct_link=this.page.locator("//a[@href='/product_details/1']")
    readonly search_field=this.page.locator('id=search_product')
    readonly submitSearch_icon=this.page.locator('id=submit_search')
    readonly addToCart_btn=this.page.locator("//div[@class='productinfo text-center']//a[@class='btn btn-default add-to-cart']")
    readonly successmessage_toaster=this.page.locator("//div[@class='modal-body']")
    readonly viewCart_link=this.page.locator("//p[@class='text-center']//a[@href='/view_cart']")
    readonly cartIcon_link=this.page.locator("//li//a[@href='/view_cart']")
    readonly checkOut_btn=this.page.locator("//a[@class='btn btn-default check_out']")
    readonly placeOrder_link=this.page.locator("//a[@href='/payment']")
    readonly continueShopping_btn=this.page.locator('text=Continue Shopping')

//===============================Functions==============================
async NavigateToProductsPage(){
  await this.clickOnElement(this.products_link);
}
async ClickOnViewProduct(){
  await this.clickOnElement(this.viewProduct_link);
}
async searchOnProduct(productName:string){
  await this.typeTextIntoField(this.search_field,productName)
  await this.clickOnElement(this.submitSearch_icon)
}
async assertProductNameVisibleAfterSearch(expectedProductName: string) {
  await expect(this.page.locator('.productinfo p', { hasText: expectedProductName })).toBeVisible();
}

async assertProductNameIsDisplayed(expectedName: string) {
  const actualName = await this.page.locator('div.product-information h2').textContent();
  expect(actualName?.trim()).toBe(expectedName);
}
async addProductToCart(){
  await this.clickOnElement(this.addToCart_btn)
}
async ViewCartLink(){
  await this.clickOnElement(this.viewCart_link)
}
async ClickOnCheckOutButton(){
  await this.clickOnElement(this.checkOut_btn)
}
async clickOnPlaceOlderButton(){
  await this.clickOnElement(this.placeOrder_link)
}
async clickOnCartLink(){
  await this.clickOnElement(this.cartIcon_link)
}
async clickOnContinueShoppingButton(){
  await this.clickOnElement(this.continueShopping_btn)
}
}
