import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import {$, $$} from '../../lauch/engine';

class LoginModalFragment {
  username:PromodElementType
  password:PromodElementType
  sighInBtn:PromodElementType
  constructor() {
    this.username = $$('.form-control').get(0);
    this.password = $$('.form-control').get(1);
    this.sighInBtn = $('.btn.btn-primary');
	}
}

export { LoginModalFragment };
