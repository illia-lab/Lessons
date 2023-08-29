import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import { Collection } from '../base/collection';
import { LayerBase } from './layer.base';

class Base extends LayerBase {
  root: PromodElementType;
  id: string;

  constructor(root: string | PromodElementType, name: string) {
    super(root, name);
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

  async waitForRootReady() {
    await waitForCondition(async () => await this.root.isPresent(), {
      timeout: 7500,
      message: (time, err = 'no errors') =>
        `${this.constructor.name} ${this.id} is not visible, waiting time ${time}, error: ${err}`,
    });
  }

  async click(data: { [k: string]: any }): Promise<void> {
    await this.waitForRootReady();
    const loginDataKeys = Object.keys(data);
    for (const key of loginDataKeys) {
      /**
       * !@info page properties should be base library elements,not fragments!
       */
      await this[key].click(data[key]);
    }
    return;
  }

  async getData(data: { [k: string]: any } = {}): Promise<{ [k: string]: any }> {
    await this.waitForRootReady();
    const DataKeys = Object.keys(data);
    const result = {};
    for (const key of DataKeys) {
      /**
       * !@info page properties should be base library elements,not fragments!
       */
      result[key] = await this[key].getData(data[key]);
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

  async sendKeys(data: { [k: string]: any }): Promise<void> {
    await this.waitForRootReady();
    const loginDataKeys = Object.keys(data);
    for (const key of loginDataKeys) {
      const value = data[key];
      await this[key].sendKeys(value);
    }
  }
}

export { Base };
