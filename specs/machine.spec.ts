import { expect } from 'chai';
import { provider } from '../framework';
import { LoginFragment } from '../framework/fragments';
import {MachinesTablePage} from '../framework/pages/machines-table/page';
import { MainPage } from '../framework/pages/main/main';

const { browser } = provider;
const { $$, $ } = provider.elementInterface;
const { waitForCondition } = provider.waiters;

describe('Login test suite', async () => {
  beforeEach('Set up', async () => {
    await browser.get('http://localhost:4000/');
    await waitForCondition(async () => await $('body').isPresent());
    await browser.executeScript(() => localStorage.clear());
    await browser.get('http://localhost:4000/');
  });

  it.only('filter machine by manufacturer', async () => {
    const mainPage = new MainPage()
    const machinesPage = new MachinesTablePage();
    const filterManufacturer = 'ITALMIX DUPLEX';
    // TODO
    await mainPage.loginFrag.login({ username: 'admin', password: 'admin' });
    await machinesPage.sendKeys({filters: {manuFacturer: filterManufacturer}});
    await machinesPage.click({filters: {filter: null}});

    const result = await machinesPage.getData({machines: {manuFacturer: null}});
    console.log(result, '<');

    result.machines.forEach((machineData) => expect(machineData.manuFacturer).to.include(filterManufacturer));
  });
});
