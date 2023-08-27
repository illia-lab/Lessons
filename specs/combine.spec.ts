import { MainPage } from '../framework/pages/main/main';
import { provider } from '../framework';
import { expect } from 'chai';
import { Collection } from '../lib/base/collection';
import { CombineRowFragment } from '../framework/pages/combines/fragments/combine.table.row';
import { CombineTableFragment } from '../framework/pages/combines/fragments/combine.table';
import { NavigationPanelFragment } from '../framework/navigation/navigation.panel';
const { browser } = provider;
const { $$, $ } = provider.elementInterface;
const { waitForCondition } = provider.waiters;

describe('Combine table Test suite', () => {
  beforeEach('Set up', async () => {
    await browser.get('http://localhost:4000/');
    await waitForCondition(async () => await $('body').isPresent());
    await browser.executeScript(() => localStorage.clear());
    await browser.get('http://localhost:4000/');
  });
  it.only('Combine test case', async () => {
    const navigationPanel = new NavigationPanelFragment('#combains_page > div.header', 'Header');
    const mainPage = new MainPage();
    const logins = { username: 'admin', password: 'admin' };
    await mainPage.sendKeys({ logins });
		await mainPage.click({logins: {login: null}});
		await browser.sleep(2000)
  });
});
