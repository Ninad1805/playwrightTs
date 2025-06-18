import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/loginPage';
import { DashboardPage } from '../pageobjects/DashboardPage';
import testData from '../utils/testData.json';

test('Login Test', async ({ browser, page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await page.goto("https://www.rahulshettyacademy.com/client")
    await loginPage.login(testData.username,testData.password)
    console.log(await dashboardPage.listAllProducts())
})