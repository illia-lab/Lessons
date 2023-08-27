import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import { $, $$ } from '../../lauch/engine';
import { waitForCondition } from 'sat-utils';

class NavigationPanelFragment extends BaseFragment {
  toAnalyticsBtn: PromodElementType;
  toCombinesBtn;
  toAdminOffice: PromodElementType;
  leaveBtn: PromodElementType;

  constructor(root, name) {
    super(root,name);
    this.toAnalyticsBtn = this.root.$$('button:nth-child(1)').get(0);
    this.toCombinesBtn = this.root.$$('button:nth-child(1)').get(1);
    this.toAdminOffice = this.root.$$('button:nth-child(1)').get(2);
    this.leaveBtn = this.root.$('button:nth-child(5)');
  }

}

export { NavigationPanelFragment };
