import { expect } from 'chai';
import { sleep, lengthToIndexesArray, asyncMap } from 'sat-utils';
import { provider } from '../framework';
import { LoginFragment, MechineListRowFragment, MachineFiltersFragment } from '../framework/fragments';
import { CollectionFragment } from '../framework/fragments/collection.frag';

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
    await sleep(250);


    const result = await new CollectionFragment(
      '#table_page > div.machies_list_section > table > tbody > tr',
      MechineListRowFragment,
    ).getData()

    result.forEach((machineData) => expect(machineData.manuFacturer).to.include(filterManufacturer));
  })
})
