import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import { $ } from '../../lauch/engine';
import { Collection } from './collection';

class BasePage {
  root: PromodElementType;
  id: string;

  constructor(root: string | PromodElementType, name: string) {
    this.root = typeof root === 'string' ? $(root) : root;
    this.id = name;
  }
/**
 * @param {string | PromodElementType} selector
 * @param {string } childName
 * @param {any} Child
 * @param {any} CollectionChild
 * @returns {any} retuns any
 *
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

  async WaitForPageReady() {
    await waitForCondition(async () => await this.root.isDisplayed(), {
      timeout: 7500,
      message: () => `${this.constructor.name} ${this.id} is not visible`,
    });
  }
}
export { BasePage };
