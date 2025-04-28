
import { Page, Locator, expect } from '@playwright/test';
import { logger } from '../Logger';

export class MainPage {
    readonly page: Page;
    readonly eventManagementButton: Locator;
    readonly createNewEventButton: Locator;
    readonly eventNameInput: Locator;
    readonly seasonDropdown: Locator;
    readonly startDateButton: Locator;
    readonly endDateButton: Locator;
    readonly seasonOption: Locator;
    readonly recruit: Locator;
    readonly recruitOption: Locator;
    readonly mateS: Locator;
    readonly mateC: Locator;
    readonly pikud1: Locator; 
    readonly list2: Locator;
    readonly ogda1: Locator;
    readonly end1: Locator;
    readonly end2: Locator;
    readonly end3: Locator;
    readonly end4: Locator;
    readonly final: Locator;



    constructor(page: Page) {
        this.page = page;
        this.eventManagementButton = page.locator('input[value="1\u00A0\u00A0ניהול אירועים"]');
        this.createNewEventButton = page.locator('button:has-text("להקמת אירוע חדש")');
        this.eventNameInput = page.locator('div.text-box[data-label-val="שם האירוע"] input[type="text"]');
        this.seasonDropdown = page.locator('div.dropdown.dropdown-select[label="No-Text period"]');
        this.seasonOption = page.locator('span:has-text("עונת 1")');
        this.recruit = page.locator('div.dropdown-btn.text-box[data-label-val="No-Text pikud"]');
        this.recruitOption = page.locator('span:has-text("כללי")');
        this.mateS = page.locator('div.dropdown-btn.text-box[data-label-val="הגדרת סוג היחידה לאירוע "]');
        this.mateC = page.locator('span:has-text("מטה")');
        this.pikud1 = page.locator(
            'li[role="treeitem"][aria-label="פיקוד 1"] >> div[role="checkbox"]'
          );
// במקום זה:
       this.list2 = page.locator(
    'div.col-4:has(div.section_title:has-text("בחירת יחידות מאגדות להצגת דוח מילוי"))'
  );

  // מתוך אותו קונטיינר – מגדירים את ה־checkbox של אוגדה 1
       this.ogda1 = this.list2.locator(
    'li[role="treeitem"][aria-label="אוגדה 1"] >> div.dx-checkbox-container'
  );




        this.startDateButton = page.locator(
            '#layout > div > div.app_content > div > main > div > div:nth-child(9) > div > div:nth-child(1) > div > div.dx-dropdowneditor-input-wrapper > div > div.dx-texteditor-buttons-container > div.dx-widget.dx-button-mode-contained.dx-button-normal.dx-rtl.dx-dropdowneditor-button'
        );
        this.endDateButton = page.locator(
            '#layout > div > div.app_content > div > main > div > div:nth-child(9) > div > div:nth-child(2) > div > div.dx-dropdowneditor-input-wrapper > div > div.dx-texteditor-buttons-container > div.dx-widget.dx-button-mode-contained.dx-button-normal.dx-rtl.dx-dropdowneditor-button'
        );



        this.end1 = page.locator('#layout > div > div.app_content > div > main > div > div:nth-child(22) > div.questions_section > div:nth-child(2) > div');
        
        this.end3 = page.locator('#layout > div > div.app_content > div > main > div > div:nth-child(22) > div.questions_section > div:nth-child(6) > div');
        
        this.final = page.locator('div.q-tab__label:has-text("ניהול פוטנציאל")');


      
    }

    async navigateToEventCreation() {
        await this.eventManagementButton.click();
        await this.createNewEventButton.click();
       
    }

    async fillEventDetails() {
        await this.eventNameInput.waitFor({ state: 'visible' });
        await this.eventNameInput.click({ force: true });
        await this.page.waitForTimeout(200); // זמן קטן לייצוב
        await this.eventNameInput.fill(''); // לנקות את השדה
        await this.page.waitForTimeout(200); // עוד זמן קטן
        await this.page.keyboard.type('מרינה 2025', { delay: 150 });
        await expect(this.eventNameInput).toHaveValue('מרינה 2025', { timeout: 5000 });


        await this.seasonDropdown.click();
        await this.seasonOption.click();
        // הוספת בחירת עונה כאן אם צריך

        // בחירת תאריך התחלה
        await this.startDateButton.click();
        const startDate = this.page.locator('[data-value="2025/04/06"]');
        await startDate.click();    // בחירת תאריך סיום
        await this.endDateButton.click();
        await this.page.keyboard.press('Enter');
        await this.recruit.click();
        await this.recruitOption.click();
        logger.info('we came to the end');
        await this.mateS.click();
        logger.info('worked');
        await this.mateC.click();
        await this.pikud1.click();
        logger.info('פיקוד אחד נלחץ');
        await this.page.waitForTimeout(1000)
        await this.list2.scrollIntoViewIfNeeded();
        await this.ogda1.scrollIntoViewIfNeeded();
        await this.ogda1.click({ force: true });
        logger.info('אוגדה 1 נלחצה');
        await this.page.waitForTimeout(2500);

    }
      

    
    async checkbox() {

  // גלילה כדי לוודא שהאלמנטים גלויים
        await this.end1.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
        await this.end1.click({ force: true });
        await this.page.waitForTimeout(2500);
      
        await this.end3.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
        await this.end3.click({ force: true });
        await this.page.waitForTimeout(2500);
        await this.final.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
        await this.final.click({ force: true });
        await this.page.waitForTimeout(2500);

     }  
    } 