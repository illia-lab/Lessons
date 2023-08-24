import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import { $, $$ } from '../../lauch/engine';

class HeaderBtnFragment  {
  SighIn:PromodElementType
  SighUp:PromodElementType
  constructor() {
    this.SighIn = $$('.btn.btn-secondary').get(0);
    this.SighUp = $$('.btn.btn-secondary').get(1);

  }
}

export { HeaderBtnFragment };