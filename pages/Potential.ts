

import { Page, Locator, expect } from '@playwright/test';
import { logger } from '../Logger';

export class Potential {
    readonly page: Page;
    readonly calculate: Locator;
    readonly show: Locator;
    readonly f1: Locator;
    readonly f2: Locator;
    readonly f4: Locator;


constructor(page: Page) {
    this.page = page;
    this.calculate = page.getByRole('button', { name: 'חשב פוטנציאל מחדש' });
    this.show = page.getByRole('button', { name: 'הצג פוטנציאל' })
    this.f1 = page.getByRole('button', { name: 'Select' }).nth(1)
    this.f2= page.getByText('לא', { exact: true })
    this.f4= page.getByText('close')
}




async Stage222() {
    await this.calculate.click();
    await this.show.click();
    await this.f1.waitFor({ state: 'visible' });
    await this.f1.click();
    await this.f2.waitFor({ state: 'visible' });
    await this.f2.click();
    await this.f4.waitFor({ state: 'visible' });
    await this.f4.click();
   
}  }  