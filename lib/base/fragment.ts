import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import { $ } from '../../lauch/engine';
import { Collection } from '../base/collection';

class BaseFragment {
  root: PromodElementType;
  id: string;

  constructor(root: string | PromodElementType, name: string) {
    this.root = typeof root === 'string' ? $(root) : root;
    this.id = name;
  }

  /**
   *that function initializated selector,childName,child and CollectionChild
   * @example this.machines = this.init(
   *   'div.machies_list_section > table > tbody > tr',
   *   'Machines row item',
   *   Collection,
   *   MechineListRowFragment,
   * );
   * @param {string} selector root selector
   * @param {string}childName name of some fragment
   * @param {any} Child some Fragmnet
   * @param {any} CollectionChild CollectionFragment
   * @returns {any} return new Child(childRoot, childName, CollectionChild);
   */

  //TODO зрозуміти що робить ця функція і що собою являють параметри цієї функції
  protected init(selector: string | PromodElementType, childName: string, Child, CollectionChild?) {
    let childRoot;
    if (Child === Collection) {
      childRoot = typeof selector === 'string' ? this.root.$$(selector) : selector;
    } else {
      childRoot = typeof selector === 'string' ? this.root.$(selector) : selector;
    }
    return new Child(childRoot, childName, CollectionChild);
  }

  /**
   * that function waits until fragment root will be visible, if condition is false throws error
   * @example
   * this.WaitFotFragmentReady()
   * @param {} nothing
   */
  async WaitForFragmentReady() {
    await waitForCondition(async () => await this.root.isDisplayed(), {
      timeout: 7500,
      message: () => `${this.constructor.name} ${this.id} is not visible`,
    });
  }
  /**
   * that method gets values from conditional datas
   * @param {object}  data it conditional data
   * @example const result = await machinesPage.machines.getData({ manuFacturer: null }); get values from MachineRowFragment
   * @returns {string} it mathod returns values of our conditional datas
   */
  //TODO зрозуміти що робить ця функція і що собою являють параметри цієї функції
  async getData(data: { [k: string]: null } = {}) {
    await this.WaitForFragmentReady();

    const dataKeys = Object.keys(data);
    const result = {};
    for (const key of dataKeys) {
      // TODO how to work with nested fragments
      result[key] = await this[key].getText();
    }
    return result;
  }

  /**
   * That method sends conditional data to login froms
   * @param {object} data it conditional data
   * @returns {string|number} this method send conditional data to login forms
   * @example async login(data: { username?: string; password?: string }) {
    await this.sendKeys(data);
   */
  //TODO зрозуміти що робить ця функція і що собою являють параметри цієї функції
  async sendKeys(data: { [k: string]: any }) {
    await this.WaitForFragmentReady();
    const loginDataKeys = Object.keys(data);
    for (const key of loginDataKeys) {
      const value = data[key];
      await this[key].sendKeys(value);
    }
  }
}

export { BaseFragment };
