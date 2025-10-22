import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/loginPage";
import { signupPage } from "../../Pages/signupPage";
import * as loginTestData from "../../TestData/loginTestData.json";
import * as signupTestData from "../../TestData/signupTestData.json";
;

let loginPage: LoginPage;
let signUpPage: signupPage;
let currentDate:string;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    signUpPage = new signupPage(page);
    currentDate=`${Date.now()}`
    await page.goto(loginPage.baseURL);
    await loginPage.clickOnSignUpLink();
    await expect(page).toHaveURL(loginPage.loginURL);
    test.setTimeout(90_000);
    
  });

  test("Register User", async ({ page }) => {
    const validEmail=`${currentDate}${signupTestData.validEmail_signup}`
    await loginPage.Navigate_To_Signup_Page(loginTestData.name,validEmail);
    await signUpPage.SignUp_To_Application(signupTestData.password,signupTestData.firstName,signupTestData.lastName,signupTestData.companyName,signupTestData.adressDetails,signupTestData.state,signupTestData.city,signupTestData.zipCode,signupTestData.mobileNumber);
    await expect(page).toHaveURL(signupTestData.createdAccount_url);
  });


 test("Register User with existing email", async ({ page }) => {
    const invalidEmail=`${currentDate}${signupTestData.invalidEmail_signup}`
    await loginPage.Navigate_To_Signup_Page(loginTestData.name,invalidEmail);
    await signUpPage.SignUp_To_Application(signupTestData.password,signupTestData.firstName,signupTestData.lastName,signupTestData.companyName,signupTestData.adressDetails,signupTestData.state,signupTestData.city,signupTestData.zipCode,signupTestData.mobileNumber);
    await expect(page).toHaveURL(signupTestData.createdAccount_url);
    await page.goto(loginPage.baseURL);
    await signUpPage.clickOnLogout_Link();
    await loginPage.Navigate_To_Signup_Page(loginTestData.name,invalidEmail);
    await signUpPage.verifyTextIsVisible(signupTestData.messageEmailExisted);

  });
