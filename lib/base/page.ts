import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import { $ } from '../../lauch/engine';
import { Collection } from './collection';

class MainPage {
  item;
  constructor() {
    this.item = new Collection('', '', BasePage);
  }
}
class BasePage {
  root: PromodElementType;
  id: string;

  constructor(root: string | PromodElementType, name: string) {
    this.root = typeof root === 'string' ? $(root) : root;
    this.id = name;
  }
  /**
   * that function initializated selector,childName,child and CollectionChild
   *  @example this.machines = this.init(
   *   'div.machies_list_section > table > tbody > tr',
   *   'Machines row item',
   *   Collection,
   *   MechineListRowFragment,
   * );
   * @param {string | PromodElementType} selector
   * @param {string } childName
   * @param {any} Child
   * @param {any} CollectionChild
   * @returns {any} return new Child(childRoot, childName, CollectionChild);
   *
   */
  //TODO зрозуміти що робить ця функція і що собою являють параметри цієї функції
  protected init(selector: string | PromodElementType, childName: string, Child, CollectionChild?) {
    console.log(selector, childName, Child, CollectionChild);
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

  async WaitForPageReady() {
    await waitForCondition(async () => await this.root.isDisplayed(), {
      timeout: 7500,
      message: () => `${this.constructor.name} ${this.id} is not visible`,
    });
  }
}
export { BasePage };
