import type { PromodElementType } from 'promod/built/interface';
import { BasePage } from '../../../lib/base/page';
import { HeaderFragment } from './fragments/header';
import { RegistationModalFragment } from './fragments/registration.modal.form';
import {LoginModalFragment} from './fragments/login.modal.form'

class MainPage extends BasePage {
  headerBtns: PromodElementType;
  registatiomnFrag: PromodElementType;
  loginFrag: PromodElementType;

  constructor() {
    super('#main_page','Main page');
    this.headerBtns = this.init('#main_page > div.main_header >', 'Headers Buttons', HeaderFragment);
    this.registatiomnFrag = this.init(
      '#main_page > div.modal_wrapper.registration_form > ',
      'Registration Form',
      RegistationModalFragment,
    );

    this.loginFrag = this.init('#main_page > div.modal_wrapper.login_form > ', 'Login Form', LoginModalFragment);
  }
}

export { MainPage };
