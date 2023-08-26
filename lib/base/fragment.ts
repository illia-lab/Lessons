import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import { $ } from '../../lauch/engine';
import {Collection} from '../base/collection';
import { Base } from './base';

class BaseFragment extends Base {
  constructor(root: string | PromodElementType, name: string) {
    super(root, name)
  }
  async click(data: { [k: string]: any }) {
    await this.WaitForRootReady();
    const loginDataKeys = Object.keys(data);
    for (const key of loginDataKeys) {
       /**
      * !@info page properties should be base library elements,not fragments!
      */
      await this[key].click();
    }
  }

  async getData(data: { [k: string]: any } = {}): Promise<{ [k: string]: any }> {
    await this.WaitForRootReady();
		const loginDataKeys = Object.keys(data);
		const result = {}
    for (const key of loginDataKeys) {
     /**
      * !@info page properties should be base library elements,not fragments!
      */
      result[key] = await this[key].getText()
    }
    return result
  }
}

export { BaseFragment };
