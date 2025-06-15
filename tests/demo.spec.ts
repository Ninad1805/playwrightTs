import { test, expect } from '@playwright/test';

test('First test', async ({ browser, page }) => {
    await page.goto("https://www.rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill('anshika@gmail.com')
    await page.locator('#userPassword').fill('Iamking@000')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
    await page.locator('.card-body b').first().waitFor()
    const title = await page.locator('.card-body b').allTextContents()
    console.log(title)
})