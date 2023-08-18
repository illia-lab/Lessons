import type {PromodElementType} from 'promod/built/interface';
import {$$} from '../../lauch/engine'
class LoginFragment {
  username: PromodElementType;
  password: PromodElementType;
  SighIn: PromodElementType;
  constructor() {
    this.username = $$('input').get(0);
    this.password = $$('input').get(1);
    this.SighIn = $$('button').get(2);
  }

	async login(loginData: {username?: string; password?: string}) {
		const loginDataKeys = Object.keys(loginData); //['username','password'],['password','username'],['username],['password']
		for (const key of loginDataKeys) {
			const value = loginData[key]
await this[key].sendKeys(value)
		}
		await this.SighIn.click()
	 }
}
export{LoginFragment}