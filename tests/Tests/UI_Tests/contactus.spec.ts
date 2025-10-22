import { test, expect } from "@playwright/test";
import { contactusPage } from "../../Pages/contactusPage";
import * as testDataContactUs from "../../TestData/contactusTestData.json";
import { LoginPage } from "../../Pages/loginPage";

let contactusPageObj: contactusPage;
let loginPage:LoginPage;

test.beforeEach(async ({ page }) => {
  contactusPageObj = new contactusPage(page);
   loginPage = new LoginPage(page);
   await page.goto(loginPage.baseURL);
});

test('Contact Us - Valid Submission', async ({ page }) => {
  await contactusPageObj.ContactUs(
    testDataContactUs.name,
    testDataContactUs.email,
    testDataContactUs.subject,
  );

  await expect(page).toHaveURL(testDataContactUs.contactus_url);
});

