import { APIRequestContext, expect ,APIResponse} from '@playwright/test';
import * as createUserData from '../../TestData/postAPI_testData.json';
const createUser_endPoint='https://automationexercise.com/api/createAccount'
export class PostSignup {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createAccount(validEmail: string) {
    const uniqueEmail = `nader${Date.now()}@mail.com`;

    const formData = {
      ...createUserData,
      email: uniqueEmail,
    };

    const response = await this.request.post(createUser_endPoint, {
      form: formData,
    });

    const body = await response.text();

    console.log( 'Create User Response:', body);
    console.log( 'Email Used:', uniqueEmail);

    return {
    email: uniqueEmail,
    response,
    body
  };
  }

 assertCreateUserSuccess(response: APIResponse, body: string) {
  expect(response.status()).toBe(200);
  expect(body).toContain('User created!');
}
}

