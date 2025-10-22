import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/loginPage";
import { productsPage } from "../../Pages/productsPage";
import * as productsTestData from "../../TestData/productsTestData.json";
import * as loginTestData from "../../TestData/loginTestData.json";
import * as signupTestData from "../../TestData/signupTestData.json";
import { signupPage } from "../../Pages/signupPage";

let loginPage: LoginPage;
let productObj: productsPage;
let signUpPage: signupPage;
let currentDate: string;
let validEmail: string;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  productObj = new productsPage(page);
  signUpPage = new signupPage(page);
  test.setTimeout(90_000);

  currentDate = `${Date.now()}`;
  validEmail = `${currentDate}${loginTestData.validEmail}`;

  await page.goto(loginPage.baseURL);
  await loginPage.clickOnSignUpLink();
});

test('Check out the product', async ({ page }) => {
  // Signup flow
  await loginPage.Navigate_To_Signup_Page(loginTestData.name, validEmail);
  await signUpPage.SignUp_To_Application(
    signupTestData.password,
    signupTestData.firstName,
    signupTestData.lastName,
    signupTestData.companyName,
    signupTestData.adressDetails,
    signupTestData.state,
    signupTestData.city,
    signupTestData.zipCode,
    signupTestData.mobileNumber
  );
  await page.goto(loginPage.baseURL);
  await signUpPage.clickOnLogout_Link();

  // Login with newly created user
  await loginPage.login_to_Application(validEmail, loginTestData.password);
  await expect(page).toHaveURL(loginTestData.Url_afterLogin);

  // Product checkout flow
  await productObj.NavigateToProductsPage();
  await expect(page).toHaveURL(productsTestData.products_url);

  await productObj.searchOnProduct(productsTestData.productName);
  await productObj.assertProductNameVisibleAfterSearch(productsTestData.productName);

  await productObj.addProductToCart(); 
  await productObj.clickOnContinueShoppingButton();
  await productObj.clickOnCartLink();
  await productObj.ClickOnCheckOutButton(); 
  await expect(page).toHaveURL(productsTestData.checkout_url);
  await productObj.clickOnPlaceOlderButton();
  await expect(page).toHaveURL(productsTestData.payment_url);
});
