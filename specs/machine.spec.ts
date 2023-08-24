import { expect } from 'chai';
import { provider } from '../framework';
import { LoginFragment } from '../framework/fragments';
import { MachinesTablePage } from '../framework/pages/machines-table/page';

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
    const machinesPage = new MachinesTablePage();
    const filterManufacturer = 'ITALMIX DUPLEX';
    // TODO
    await new LoginFragment().login({ username: 'admin', password: 'admin' });
    await machinesPage.filters.filter({ manuFacturer: filterManufacturer });

    const result = await machinesPage.machines.getData({ manuFacturer: null });
    console.log(result, '<');

    result.forEach((machineData) => expect(machineData.manuFacturer).to.include(filterManufacturer));
  });
});
