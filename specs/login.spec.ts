import { provider } from '../framework';
import { MainPage } from '../framework/pages/main/page';

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

  it('Admin login test', async () => {
    const mainPage = new MainPage();
    const logins = { username: 'admin', password: 'admin' };
    await mainPage.sendKeys({logins});
    await mainPage.click({ logins: { login: null } });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed());
  });
  it('Admin login test"(Negative)"', async () => {
    const mainPage = new MainPage();
    const logins = { username: '', password: 'admin' };
    await mainPage.sendKeys({logins});
    await mainPage.click({ logins: { login: null } });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed());
  });
  it('Admin login test"(Negative)"', async () => {
    const mainPage = new MainPage();
    const logins = { username: 'admin', password: '' };
    await mainPage.sendKeys({logins});
    await mainPage.click({ logins: { login: null } });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed());
  });
  it('Admin login test(Negative)', async () => {
    const mainPage = new MainPage();
    const logins = { username: '', password: '' };
    await mainPage.sendKeys({logins});
    await mainPage.click({ logins: { login: null } });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed());
  });

  it('User login test', async () => {
    const mainPage = new MainPage();
    const logins = { username: 'admin', password: 'admin' };
    await mainPage.sendKeys({logins});
    await mainPage.click({ logins: { login: null } });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => !(await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed()));
  });

  it('User login test(Negative)', async () => {
    const mainPage = new MainPage();
    const logins = { username: 'test', password: 'test' };
    await mainPage.sendKeys({logins});
    await mainPage.click({ logins: { login: null } });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => !(await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed()));
  });
  it('User login test', async () => {
    const mainPage = new MainPage();
    const logins = { username: 'test', password: 'test' };
    await mainPage.sendKeys({logins});
    await mainPage.click({ logins: { login: null } });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await waitForCondition(async () => !(await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed()));
  });
});
