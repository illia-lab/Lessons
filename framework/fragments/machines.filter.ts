import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';

class MachineFiltersFragment extends BaseFragment {
  Price: PromodElementType;
  filterButton: PromodElementType;
  workVolume: PromodElementType;
  manuFacturer: PromodElementType;
  root: PromodElementType;

  constructor() {
    super('xpath=//*[@class="table filtering"]/parent::*');
    this.manuFacturer = this.root.$('.filtering input[placeholder="Виробник"]');
    this.workVolume = this.root.$(`.filtering input[placeholder="Робочий об'єм"]`);
    this.Price = this.root.$(`.filtering input[placeholder="Ціна"]`);
    this.filterButton = this.root.$('xpath=//*[text()="Фільтрувати"]');
  }

  /**
   * метод який відсилає певні значення в поля для фільтрування
   * @param {string} filterData містить в собі умовні дані manuFacturer,workVolume та Price
   * @returns {Promise} повертає Promise<void>
   */

  async filter(data: { manuFacturer?: string; workVolume?: string; Price?: string }) {
    await this.sendKeys(data);
    await this.filterButton.click();
  }
}

export { MachineFiltersFragment };
