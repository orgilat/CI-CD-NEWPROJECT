
import { Page, Locator, expect } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly eventManagementButton: Locator;
    readonly createNewEventButton: Locator;
    readonly eventNameInput: Locator;
    readonly seasonDropdown: Locator;
    readonly startDateButton: Locator;
    readonly endDateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.eventManagementButton = page.locator('input[value="1\u00A0\u00A0ניהול אירועים"]');
        this.createNewEventButton = page.locator('button:has-text("להקמת אירוע חדש")');
        this.eventNameInput = page.locator('div.text-box[data-label-val="שם האירוע"] input[type="text"]');
        this.seasonDropdown = page.locator('div.field[label="בחר עונת הערכה"]');
        this.startDateButton = page.locator(
            '#layout > div > div.app_content > div > main > div > div:nth-child(7) > div > div:nth-child(1) > div > div.dx-dropdowneditor-input-wrapper > div > div.dx-texteditor-buttons-container > div.dx-widget.dx-button-mode-contained.dx-button-normal.dx-rtl.dx-dropdowneditor-button'
        );
        this.endDateButton = page.locator(
            '#layout > div > div.app_content > div > main > div > div:nth-child(7) > div > div:nth-child(2) > div > div.dx-dropdowneditor-input-wrapper > div > div.dx-texteditor-buttons-container > div.dx-widget.dx-button-mode-contained.dx-button-normal.dx-rtl.dx-dropdowneditor-button'
        );
    }

    async navigateToEventCreation() {
        await this.eventManagementButton.click();
        await this.createNewEventButton.click();
        await this.eventNameInput.waitFor({ state: 'visible', timeout: 60002 });
    }

    async fillEventDetails() {
        await this.eventNameInput.fill('מרינה 2025');
        await expect(this.eventNameInput).toHaveValue('מרינה 2025');

        await this.seasonDropdown.click();
        // הוספת בחירת עונה כאן אם צריך

        // בחירת תאריך התחלה
        await this.startDateButton.click();
        const startDate = this.page.locator('[data-value="2025/04/06"]');
        await startDate.click();    // בחירת תאריך סיום
        await this.endDateButton.click();
        await this.page.keyboard.press('Enter');
    }
}

