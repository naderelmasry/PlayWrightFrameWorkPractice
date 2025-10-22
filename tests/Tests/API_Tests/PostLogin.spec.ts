import { test, expect } from '@playwright/test';
import { PostSignup } from '../../Pages/APIpages/PostSignupPage';
import { PostLogin } from '../../Pages/APIpages/postLogin';
import * as userData from '../../TestData/postAPI_testData.json';

let validEmail: string;
let createUserResponseBody: string;

test.beforeAll(async ({ request }) => {
  validEmail = `nader${Date.now()}@mail.com`;
  const postSignup = new PostSignup(request);

  const { response, body } = await postSignup.createAccount(validEmail);
  createUserResponseBody = body;

  expect(response.status(), 'Create user API status').toBe(200);
  expect(body).toContain('User created!');
});

test('Login with created account', async ({ request }, testInfo) => {
  const postLogin = new PostLogin(request);

  const { response, bodyText } = await postLogin.login(validEmail, userData.password);

  // Log email to HTML report
  testInfo.annotations.push({
    type: 'info',
    description: `Login with the created email: ${validEmail}`,
  });

  expect(response.status(), 'Login API status').toBe(200);
  expect(bodyText).toContain('User exists!');
});
