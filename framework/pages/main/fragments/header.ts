import type { PromodElementType } from 'promod/built/interface';
import {BaseFragment} from '../../../../lib';
import {$$ } from '../../../../lauch/engine';

class HeaderFragment extends BaseFragment {
  sighIn: PromodElementType;
  sighUp: PromodElementType;

  constructor(root, name) {
    super(root, name);
    this.sighIn = this.root.$$('.btn.btn-secondary').get(0)
    this.sighUp = this.root.$$('.btn.btn-secondary').get(1)
  }
}

export { HeaderFragment };
