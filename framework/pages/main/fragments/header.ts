import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../../../lib';

class HeaderFragment extends BaseFragment {
  sighIn: PromodElementType;
  sighUp: PromodElementType;

  constructor(root, name) {
    super(root, name);
    this.sighIn = this.root.$('button:nth-child(1)');
    this.sighUp = this.root.$('button:nth-child(2)');
  }
}

export { HeaderFragment };
