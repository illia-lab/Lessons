import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';

class LoginFragment extends BaseFragment {
  username: PromodElementType;
  password: PromodElementType;
  SighIn: PromodElementType;

  constructor() {
    super('.login_form', 'Login form');
    this.username = this.root.$$('input').get(0);
    this.password = this.root.$$('input').get(1);
    this.SighIn = this.root.$('button');
  }

  /**
   * Метод який відсилає певні значення в логін поля
   * @param {loginData} loginData містить в собі умовні дані username та password
   * @returns {Promise} повертає Promise<void>
   */

  async login(data: { username?: string; password?: string }) {
    await this.sendKeys(data)
    await this.SighIn.click();
  }
}
export { LoginFragment };
