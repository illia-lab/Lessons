import { provider } from '../framework';
import {MainPage} from '../framework/pages/main/main'

const { browser } = provider;
const { $ } = provider.elementInterface;
const { waitForCondition } = provider.waiters;

describe('Login test suite', async () => {
  beforeEach('Set up', async () => {
    await browser.get('http://localhost:4000/');
    await waitForCondition(async () => await $('body').isPresent());
    await browser.executeScript(() => localStorage.clear());
    await browser.get('http://localhost:4000/');
  });

  it('Admin Success test', async () => {
    const mainPage = new MainPage()
    await mainPage.loginFrag.login({ username: 'admin', password: 'admin' });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed());
  });

  it('User Success test', async () => {
    const mainPage = new MainPage()
    await mainPage.loginFrag.login({ username: 'Test', password: 'Test' });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => !(await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed()));
  });
});
