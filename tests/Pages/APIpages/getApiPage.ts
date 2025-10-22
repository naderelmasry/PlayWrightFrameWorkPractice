// Pages/ProductAPI.ts
import { APIRequestContext, expect } from '@playwright/test';
// import * as APItestData from '../TestData/getAPI_TestData.json';
let getAllProducts_endpoint=" https://automationexercise.com/api/productsList";

export class ProductAPI {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAllProducts() {
  const response = await this.request.get(getAllProducts_endpoint);
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log('Products Response:', body); 
  return body;
}

  async assertProductExistsByName(productName: string) {
    const body = await this.getAllProducts();
    const exists = body.products?.some((product: any) => product.name === productName);
    expect(exists).toBeTruthy();
  }
}
