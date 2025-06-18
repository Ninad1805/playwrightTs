import { Page, Locator } from '@playwright/test';

export class DashboardPage {

    card: Locator;
    addToCart: Locator;
    cardText: Locator;

    constructor(page: Page) {

        this.card = page.locator('.card-body');
        this.cardText = page.locator('.card-body b');
        this.addToCart = page.locator("text='Add To Cart'")
    }

    async listAllProducts() {
        await this.card.first().waitFor()
        return await this.card.allTextContents()
    }

    async searchProduct(productName) {
        const titles = await this.cardText.allTextContents()
        console.log(titles)
        const count = await this.cardText.count()
        for (let i = 0; i < count; ++i) {
            if (await this.card.nth(i).locator('b').textContent() == productName) {
                await this.card.nth(i).locator("text='Add To Cart'").click()
                break;
            }
        }
    }
}