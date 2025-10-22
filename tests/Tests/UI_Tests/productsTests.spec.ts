import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/loginPage";
import { productsPage } from "../../Pages/productsPage";
import * as productsTestData from "../../TestData/productsTestData.json";

let loginPage: LoginPage;
let productObj: productsPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  productObj = new productsPage(page);
  await page.goto(loginPage.baseURL);
  await productObj.NavigateToProductsPage();
  await expect(page).toHaveURL(productsTestData.products_url);
  
});

test('Verify All Products and product detail page', async ({ page }) => {
 await productObj.ClickOnViewProduct();
  await expect(page).toHaveURL(productsTestData.viewProduct_url);

  await productObj.assertProductNameIsDisplayed(productsTestData.productName);
});

test('Search Product', async ({ page }) => {
  await productObj.searchOnProduct(productsTestData.productName);
  await productObj.assertProductNameVisibleAfterSearch(productsTestData.productName);
});

test('Add product to cart', async ({ page }) => {
  await productObj.searchOnProduct(productsTestData.productName);
  await productObj.assertProductNameVisibleAfterSearch(productsTestData.productName);

  await productObj.addProductToCart(); 

  await expect(productObj.successmessage_toaster).toContainText(
    productsTestData.addToCart_successMessage
  );
});
