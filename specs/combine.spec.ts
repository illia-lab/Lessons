import { MainPage } from '../framework/pages/main/page';
import { provider } from '../framework';
import { expect } from 'chai';
import { Collection } from '../lib/base/collection';
import { CombineListRowFragment } from '../framework/pages/combines/fragments/combine.list.row';
import { NavigationPanelFragment } from '../framework/navigation-header/navigation.panel';
import { NavigationPage } from '../framework/navigation-header/navigation.page';
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
    const navigationPanel = new NavigationPanelFragment('div.header', 'Header');
    const mainPage = new MainPage();
    const combineRow = new CombineListRowFragment('.dynamic_table_row', 'Combaine rows')
    const logins = { username: 'admin', password: 'admin' };
    await mainPage.sendKeys({ logins });
    await mainPage.click({logins: {login: null}});
    await navigationPanel.click({combineClick: {toCombine: null}})
    await browser.sleep(5000);





  });
});
