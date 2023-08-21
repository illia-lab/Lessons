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


/**
 * @param {string} el містить в собі умовні данні які в подальшому будуть використовуватися в методах
 * @returns {Promise} повертає Promise
 */

  async sendKeys(el) {
    await this.WaitFotFragmentReady();
    const loginDataKeys = Object.keys(el);
    for (const key of loginDataKeys) {
      const value = el[key];
      await this[key].sendKeys(value);
    }
}

}

export { BaseFragment };
