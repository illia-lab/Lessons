import type { PromodElementType } from 'promod/built/interface';
import {BaseFragment, Button} from '../../lib';
import { waitForCondition } from 'sat-utils';

class NavigationPanelFragment extends BaseFragment {
  toAnalyticsBtn: Button;
  toCombine: Button;
  toAdminOffice: Button;
  leaveBtn: Button;

  constructor(root, name) {
    super(root, name);
    this.toAnalyticsBtn = this.init(this.root.$$('button:nth-child(1)').get(0),'to analytics button',Button)
    this.toCombine = this.init(this.root.$$('button:nth-child(1)').get(1),'to combines button',Button)
    this.toAdminOffice = this.init(this.root.$$('button:nth-child(1)').get(2),'to admin office button',Button)
    this.leaveBtn = this.init(this.root.$('button:nth-child(5)'),'leave button',Button)
  }
  async combineClick() {
      }
}


export { NavigationPanelFragment };
