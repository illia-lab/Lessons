import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import { $, $$ } from '../../lauch/engine';
import { waitForCondition } from 'sat-utils';

class NavigationPanelFragment extends BaseFragment {
  toAnalyticsBtn: PromodElementType;
  toCombinesBtn: PromodElementType;
  toAdminOffice: PromodElementType;
  leaveBtn: PromodElementType;

  constructor(root, name) {
    super(root, name);
    this.toAnalyticsBtn = this.root.$$('button:nth-child(1)').get(0);
    this.toCombinesBtn = this.root.$$('button:nth-child(1)').get(1);
    this.toAdminOffice = this.root.$$('button:nth-child(1)').get(2);
    this.leaveBtn = this.root.$('button:nth-child(5)');
  }
/**
   * that function waits until fragment root will be visible, if condition is false throws error
   * @example
   * this.WaitFotFragmentReady()
   * @param {} nothing
   */
  async waitForToAdminBtnReady() {
    await waitForCondition(async () => await this.toAdminOffice.isDisplayed(), {
      timeout: 7500,
      message: () => ' to admin office button is not visible',
    });
  }

  async toAdmineOffice() {
    this.waitForToAdminBtnReady();
    await this.toAdminOffice.click();
  }
}

export { NavigationPanelFragment };
