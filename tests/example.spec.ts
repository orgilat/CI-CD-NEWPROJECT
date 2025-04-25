import { test, expect } from './fixtures';
import { allure } from 'allure-playwright';
import { logger } from '../Logger';


test('בדיקה מלאה: מעבר לניהול הסקר ואז למסך עונות', async ({ loginPage, homePage, mainPage }) => {
  
    allure.description("The test case is to register a new user and add a product to the cart");
    allure.owner("or gilat");
    allure.tags("entry", "development");
    allure.severity('critical');

  await allure.step('התחברות למערכת', async () => {
    logger.info('The test case has started');
    await loginPage.goto();
    await loginPage.login('MARINAS', 'Ms123456');
  });

  await allure.step('מעבר לניהול סוציומטרי', async () => {
    await loginPage.goToSociometricManagement();
  });

  await allure.step('מעבר הלוך ושוב במסכים', async () => {
    await homePage.backandforth();
  });

  await allure.step('פתיחת מסך הקמת אירוע', async () => {
    await mainPage.navigateToEventCreation();
  });

  await allure.step('מילוי פרטי האירוע', async () => {
    await mainPage.fillEventDetails();
    logger.info('The test has ended');
  });
});
