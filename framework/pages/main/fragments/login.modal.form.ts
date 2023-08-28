import { BaseFragment, Button, Input } from '../../../../lib';
import { $, $$ } from '../../../../lauch/engine';

class LoginModalFragment extends BaseFragment {
  username: Input;
  password: Input;
  login: Button;

  constructor(root, name) {
    super(root, name);
    this.username = this.init(this.root.$$('input').get(0), 'Username input', Input);
    this.password = this.init(this.root.$$('input').get(1), 'Password input', Input);
    this.login = this.init(this.root.$('button'), 'SighIn button', Button);
  }
}

export { LoginModalFragment };
