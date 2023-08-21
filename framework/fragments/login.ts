import type { PromodElementType } from 'promod/built/interface';

import {BaseFragment} from '../../lib'

class LoginFragment extends BaseFragment{
  username: PromodElementType;
  password: PromodElementType;
  SighIn: PromodElementType;
  constructor() {
    super('.login_form')
    this.username = this.root.$$('input').get(0);
    this.password = this.root.$$('input').get(1);
    this.SighIn = this.root.$('button');
  }


  async login(loginData: { username?: string; password?: string }) {
    await this.WaitFotFragmentReady();
    const loginDataKeys = Object.keys(loginData); //['username','password'],['password','username'],['username],['password']
    for (const key of loginDataKeys) {
      const value = loginData[key];
      await this[key].sendKeys(value);
    }
    await this.SighIn.click();
  }
}
export { LoginFragment };
