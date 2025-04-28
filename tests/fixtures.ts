import { test as baseTest } from '@playwright/test';  // baseTest מ-@playwright/test
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MainPage } from '../pages/MainPage';
import { Potential } from '../pages/Potential';

type Pages = {
  loginPage: LoginPage;
  potential: Potential;
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
  potential: async ({ page }, use) => {
    await use(new Potential(page));
  },
});

// אין צורך לייבא שוב את expect, זה כבר קיים מתוך test המורחב!
export const expect = test.expect;
