import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}


  async backandforth() {
    await this.page.locator('input[value="1\u00A0\u00A0עונות"]').click();
    await this.page.waitForTimeout(1000);
    await this.page.goBack();
  
    //await this.page.locator('input[value="4\u00A0\u00A0חוקים לבדיקת שאלונים חריגים"]').click();
    //await this.page.waitForTimeout(1000);
    //await this.page.goBack();

    //await this.page.locator('#bodybody > div.BodyOut-continar > div > ul:nth-child(5) > li:nth-child(11) > input').click();
    //await this.page.waitForTimeout(1000);
    //await this.page.waitForSelector('#search42');
    //await this.page.locator('#search42').fill("אני הגואט");
    //await this.page.goBack();
  
  }
  
}