
import { APIRequestContext, APIResponse } from '@playwright/test';
const loginUserEndpoint= 'https://automationexercise.com/api/verifyLogin';
export class PostLogin {
  private request: APIRequestContext;
//   private loginUserEndpoint = 'https://automationexercise.com/api/verifyLogin';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login(email: string, password: string): Promise<{ response: APIResponse; bodyText: string }> {
    const response = await this.request.post(loginUserEndpoint, {
      form: {
        email,
        password,
      },
    });

    const bodyText = await response.text();
    console.log(`Login Response: ${bodyText}`);

    return { response, bodyText };
  }
}
