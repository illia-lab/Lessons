import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import { $ } from '../../lauch/engine';

class BaseFragment {
  root: PromodElementType;

  constructor(root: string | PromodElementType) {
    this.root = typeof root === 'string' ? $(root) : root;
  }

  /**
   * метод очікує що рутове значення буде відображене
   * @param {void} nothing
   * @returns {Promise} повертає Promise
   */

  async WaitFotFragmentReady() {
    await waitForCondition(async () => await this.root.isDisplayed(), {
      timeout: 7500,
      message: () => `${this.constructor.name} is not visible`,
    });
  }

  async getData(data: {[k: string]: null} = {}) {
    await this.WaitFotFragmentReady();
    const dataKeys = Object.keys(data);
    const result = {}
    for (const key of dataKeys) {
// TODO how to work with nested fragments
     result[key] = await this[key].getText()
    }
    return result;
  }

  /**
   * @param {string} el містить в собі умовні данні які в подальшому будуть використовуватися в методах
   * @returns {Promise} повертає Promise
   */

  async sendKeys(data: {[k : string]: any}) {
    await this.WaitFotFragmentReady();
    const loginDataKeys = Object.keys(data);
    for (const key of loginDataKeys) {
      const value = data[key];
      await this[key].sendKeys(value);
    }
  }
}

export { BaseFragment };
