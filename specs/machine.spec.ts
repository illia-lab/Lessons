import { expect } from 'chai';
import { sleep, lengthToIndexesArray, asyncMap } from 'sat-utils';
import { provider } from '../framework';
import { LoginFragment, MechineListRowFragment, MachineFiltersFragment } from '../framework/fragments';

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
    const filterManufacturer = 'ITALMIX DUPLEX';
    await new LoginFragment().login({ username: 'admin', password: 'admin' });
    await waitForCondition(async () => await $('#table_page').isDisplayed());
    await new MachineFiltersFragment().filter({ manuFacturer: filterManufacturer });
    const allAviableMachineRowsCount = $$('#table_page > div.machies_list_section > table > tbody > tr');
    const count = await allAviableMachineRowsCount.count();
    lengthToIndexesArray(count);

    const result = await asyncMap(lengthToIndexesArray(count), async (index) => {
      const machineRow = new MechineListRowFragment(index);

      return machineRow.getMachineData();
    });
    result.forEach((machineData) => expect(machineData.manuFacturer).to.include(filterManufacturer));
  });
});
