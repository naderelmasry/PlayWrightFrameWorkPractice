import { test, request } from '@playwright/test';
import { ProductAPI } from '../../Pages/APIpages/getApiPage';
import * as APItestData from '../../TestData/getAPI_TestData.json';

test('API - Get All Products', async ({ request }) => {
  const productApi = new ProductAPI(request);

  // Validate product exists
  await productApi.assertProductExistsByName(APItestData.ProductName);
});
