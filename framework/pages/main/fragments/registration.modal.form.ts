import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../../../lib';
import { $, $$ } from '../../../../lauch/engine';

class RegistationModalFragment extends BaseFragment {
  username: PromodElementType;
  password: PromodElementType;
  sighUPBtn: PromodElementType;
  name: PromodElementType;
  email: PromodElementType;

  constructor(root, name) {
    super(root, name);
    this.username = this.root.$$('.form-control').get(0);
    this.name = this.root.$$('.form-control').get(1);
    this.email = this.root.$$('.form-control').get(2);
    this.password = this.root.$$('.form-control').get(3);
    this.sighUPBtn = this.root.$('button');
  }
}

export { RegistationModalFragment };
