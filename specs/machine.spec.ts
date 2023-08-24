import { expect } from 'chai';
import { provider } from '../framework';
import { LoginFragment, MachineFiltersFragment } from '../framework/fragments';
import {MachinesTablePage} from '../framework/pages/machine.table.page';

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
    await new MachineFiltersFragment().filter({manuFacturer: filterManufacturer});

    const result = await new MachinesTablePage().MachineCollection.getData({manuFacturer: null})
    console.log(result, '<');

    result.forEach((machineData) => expect(machineData.manuFacturer).to.include(filterManufacturer));
  })
})
