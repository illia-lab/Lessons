import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import { $, $$ } from '../../lauch/engine';

class RegistationModalFragment  {
	username: PromodElementType
	password: PromodElementType
	sighUPBtn: PromodElementType
	name:PromodElementType
	email:PromodElementType
	constructor() {
		this.username = $$('.form-control').get(0);
		this.name = $$('.form-control').get(1);
		this.email = $$('.form-control').get(2);
		this.password = $$('.form-control').get(3);
		this.sighUPBtn = $('.btn.btn-primary');
	}
}

export { RegistationModalFragment };