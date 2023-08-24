import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import {$, $$} from '../../lauch/engine';
import { waitForCondition } from 'sat-utils';


class NavigationPanel {
	toAnalyticsBtn;
	toCombinesBtn;
	toAdminOffice;
	leaveBtn;
	constructor() {
		this.toAnalyticsBtn = $$('.btn.btn-primary').get(0)
		this.toCombinesBtn = $$('.btn.btn-primary').get(1)
		this.toAdminOffice = $$('.btn.btn-primary').get(2)
		this.leaveBtn = $$('.btn.btn-primary').get(3)
	}

		 async WaitFotFragmentReady() {
			await waitForCondition(async () => await this.toAdminOffice.isDisplayed(), {
			})
	}
}
export {NavigationPanel}