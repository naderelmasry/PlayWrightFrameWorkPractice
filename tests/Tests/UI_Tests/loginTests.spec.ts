import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/loginPage";
import { signupPage } from "../../Pages/signupPage";
import * as loginTestData from "../../TestData/loginTestData.json";
import * as signupTestData from "../../TestData/signupTestData.json";

let loginPage: LoginPage;
let signUpPage: signupPage;
let currentDate:string
 
test.beforeAll(() => {
 currentDate=`${Date.now()}`
});
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    signUpPage = new signupPage(page);
    currentDate=`${Date.now()}`
    await page.goto(loginPage.baseURL);
    await loginPage.clickOnSignUpLink();
    test.setTimeout(90_000);
  });

test('Valid login', async ({ page }) => {
    const validEmail=`${currentDate}${loginTestData.validEmail}`
    await expect(page).toHaveURL(loginPage.loginURL);  
    await loginPage.Navigate_To_Signup_Page(loginTestData.name,validEmail);
    await signUpPage.SignUp_To_Application(signupTestData.password,signupTestData.firstName,signupTestData.lastName,signupTestData.companyName,signupTestData.adressDetails,signupTestData.state,signupTestData.city,signupTestData.zipCode,signupTestData.mobileNumber);
    await expect(page).toHaveURL(signupTestData.createdAccount_url);
    await page.goto(loginPage.baseURL);
    await signUpPage.clickOnLogout_Link();
    await loginPage.login_to_Application(loginTestData.email,loginTestData.password);
    await expect(page).toHaveURL(loginTestData.Url_afterLogin);
})
test('Invalid login', async ({ page }) => {
    const inValidEmail=`${currentDate}${loginTestData.inValidEmail}`
    await loginPage.login_to_Application(inValidEmail,loginTestData.password);
    await loginPage.verifyTextIsVisible(loginTestData.invalidLoginMessage);
})

test('Logout User', async ({ page }) => {
    const validEmail=`${currentDate}${loginTestData.validEmail}`
    await expect(page).toHaveURL(loginPage.loginURL);  
    await loginPage.Navigate_To_Signup_Page(loginTestData.name,validEmail);
    await signUpPage.SignUp_To_Application(signupTestData.password,signupTestData.firstName,signupTestData.lastName,signupTestData.companyName,signupTestData.adressDetails,signupTestData.state,signupTestData.city,signupTestData.zipCode,signupTestData.mobileNumber);
    await expect(page).toHaveURL(signupTestData.createdAccount_url);
    await page.goto(loginPage.baseURL);
    await signUpPage.clickOnLogout_Link();
    await expect(page).toHaveURL(loginTestData.login_url);
})

