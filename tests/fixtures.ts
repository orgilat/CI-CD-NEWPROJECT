import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MainPage } from '../pages/MainPage';

type Pages = {
  loginPage: LoginPage;
  homePage: HomePage;
  mainPage: MainPage;
};

// יוצרים test חדש עם fixtures מותאמים אישית
export const test = baseTest.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
});

export const expect = test.expect;
