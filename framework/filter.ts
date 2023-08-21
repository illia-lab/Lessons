import type { PromodElementType } from 'promod/built/interface';
import { $ } from '../lauch/engine';
import { waitForCondition } from 'sat-utils';

class FilterFragment {
  root: PromodElementType;
  filterBtn: PromodElementType;
  priceForm: PromodElementType;
  workValueFrom: PromodElementType;
  producerForm: PromodElementType;
  constructor() {
    this.root = $('.table.filtering');
    this.priceForm = this.root.$('td:nth-child(3)');
    this.workValueFrom = this.root.$('td:nth-child(2)');
    this.producerForm = this.root.$('td:nth-child(1)');
    this.filterBtn = $('.btn.btn-default');
  }

  async waitForHeaderFilterForm() {
    await waitForCondition(async () => await this.root.isDisplayed(), {
      timeout: 5000,
      message: 'Filter for ms is not visible',
    });
  }
  async filter(filterData: { priceData?: number; workVolumeData?: number; producerForm?: string }) {
    await this.waitForHeaderFilterForm();
    const filterDataKeys = Object.keys(filterData);
    for (const key of filterDataKeys) {
      const value = filterData[key];
      await this[key].sendKeys(value);
    }
    await this.filterBtn.click();
  }
}
export { FilterFragment };
