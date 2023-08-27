import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../../../lib';
import { $,$$ } from '../../../../lauch/engine';

class LoginModalFragment extends BaseFragment {
  username: PromodElementType;
  password: PromodElementType;
  login: PromodElementType;

  constructor(root, name) {
    super(root, name);
    this.username = this.root.$$('.form-control').get(0);
    this.password = this.root.$$('.form-control').get(1);
    this.login = this.root.$('button')
  }
}

export { LoginModalFragment };
