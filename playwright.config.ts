<<<<<<< HEAD
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 90000, // כל טסט מקבל עד 90 שניות
  expect: {
    timeout: 90000, // זמן המתנה ל-expectים
  },
  use: {
    headless: false, // אם אתה רוצה לראות את הדפדפן
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 0, // בלי מגבלה לפעולות כמו click, fill
  },
  reporter: [
    ['list'], // מציג את התוצאות בטרמינל
    ['allure-playwright'], // הפלט לדו"ח Allure
  ],
});
=======
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 90000, // כל טסט מקבל עד 90 שניות
  expect: {
    timeout: 90000, // זמן המתנה ל-expectים
  },
  use: {
    headless: false, // אם אתה רוצה לראות את הדפדפן
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 0, // בלי מגבלה לפעולות כמו click, fill
  },
  reporter: [
    ['list'], // מציג את התוצאות בטרמינל
    ['allure-playwright'], // הפלט לדו"ח Allure
  ],
});
>>>>>>> a92e1adeae1dd5f705e0ea4bff5f9db2ace71aa8
