import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import {$, $$} from '../../lauch/engine';
import {HeaderBtnFragment} from '../../framework/fragments/headerBtn'
import {RegistationModalFragment} from '../../framework/fragments/registartionModalForm'
import {LoginModalFragment} from '../../framework/fragments/loginModalForm'

class MainPageFragment {
	HeaderBtns;
	RegistatiomnFrag;
	LoginFrag;
	constructor() {
		this.HeaderBtns = new HeaderBtnFragment()
		this.RegistatiomnFrag = new RegistationModalFragment()
		this.LoginFrag = new LoginModalFragment()
}
}
export {MainPageFragment}