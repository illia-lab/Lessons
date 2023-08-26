import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../../../lib';
import { $, $$ } from '../../../../lauch/engine';

class LoginModalFragment extends BaseFragment {
  username: PromodElementType;
  password: PromodElementType;
  sighIn: PromodElementType;

  constructor(root, name) {
    super(root, name);
    this.username = this.root.$$(':nth-child(2)').get(1);
    this.password = this.root.$$(':nth-child(2)').get(3);
    this.sighIn = this.root.$$(':nth-child(4)').get(0);
  }

  /**
   * Method what sends conditional login data to login forms
   * @param {object} data conditional login data
   * @returns {string|number} retunrs conditional data to login forms
   */

  async login(data: { username?: string; password?: string }) {
    await this.sendKeys(data);
    await this.sighIn.click();
  }
}

export { LoginModalFragment };
