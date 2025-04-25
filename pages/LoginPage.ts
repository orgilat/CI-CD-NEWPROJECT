<<<<<<< HEAD
// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.survey.co.il/pms/MMDANEW/default.asp');
  }

  async login(username: string, password: string) {
    await this.page.locator('input[name="login"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[type="submit"]').click();
    await this.page.waitForTimeout(1000);
  }

  /**
   * לוחץ על קישור "ניהול הסקר" ומוודא ניווט לעמוד המתאים
   */
// פונקציה חדשה ב-LoginPage.ts:
async goToSociometricManagement() {
  // ריחוף על "ניהול הסקר"
  const surveyAdminLink = this.page.locator('a:has-text("ניהול הסקר")');
  await surveyAdminLink.hover();

  // המתנה שתתפרס התפריט
  const sociometricLink = this.page.locator('a:has-text("ניהול סוציומטרי")');
 

  // לחיצה על "ניהול סוציומטרי"
  await sociometricLink.click();
  await this.page.waitForTimeout(1000)

}
=======
// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.survey.co.il/pms/MMDANEW/default.asp');
  }

  async login(username: string, password: string) {
    await this.page.locator('input[name="login"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[type="submit"]').click();
    await this.page.waitForTimeout(1000);
  }

  /**
   * לוחץ על קישור "ניהול הסקר" ומוודא ניווט לעמוד המתאים
   */
// פונקציה חדשה ב-LoginPage.ts:
async goToSociometricManagement() {
  // ריחוף על "ניהול הסקר"
  const surveyAdminLink = this.page.locator('a:has-text("ניהול הסקר")');
  await surveyAdminLink.hover();

  // המתנה שתתפרס התפריט
  const sociometricLink = this.page.locator('a:has-text("ניהול סוציומטרי")');
 

  // לחיצה על "ניהול סוציומטרי"
  await sociometricLink.click();
  await this.page.waitForTimeout(1000)

}
>>>>>>> a92e1adeae1dd5f705e0ea4bff5f9db2ace71aa8
}