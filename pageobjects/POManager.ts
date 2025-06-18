import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { DashboardPage } from "./DashboardPage";

export class POManager {
    loginPage: LoginPage;
    dashboardPage: any;

    constructor(page: Page) {

        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }
}