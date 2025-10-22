import { test } from '@playwright/test';
import { PostSignup } from '../../Pages/APIpages/PostSignupPage'; 
const validEmail = `nader${Date.now()}@mail.com`;
test('Api create account', async ({ request }) => {
  const postSignup = new PostSignup(request);

  const { email, response, body } = await postSignup.createAccount(validEmail);

  postSignup.assertCreateUserSuccess(response, body);

  console.log(`Test completed. Account created with email: ${email}`);
});
