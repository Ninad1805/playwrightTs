import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';
import testData from '../utils/testData.json';

test('Add product to card', async ({ browser, page }) => {
    const poManager = new POManager(page);
    await page.goto("https://www.rahulshettyacademy.com/client")
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();
    await loginPage.login(testData.username, testData.password)
    console.log(await dashboardPage.listAllProducts())
    await dashboardPage.searchProduct(testData.productName);
})