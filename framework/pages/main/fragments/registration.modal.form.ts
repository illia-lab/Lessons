import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../../../lib';
import { $$ } from '../../../../lauch/engine';

class RegistationModalFragment extends BaseFragment {
  username: PromodElementType;
  password: PromodElementType;
  sighUPBtn: PromodElementType;
  name: PromodElementType;
  email: PromodElementType;

  constructor(root, name) {
    super(root, name);
    this.username = this.root.$$(':nth-child(2)').get(1);
    this.name = this.root.$$(':nth-child(2)').get(3);
    this.email = this.root.$$(':nth-child(2)').get(4);
    this.password = this.root.$$(':nth-child(2)').get(5);
    this.sighUPBtn = this.root.$$(':nth-child(4)').get(1);
  }
}

export { RegistationModalFragment };
