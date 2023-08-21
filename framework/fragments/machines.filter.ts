import type {PromodElementType} from 'promod/built/interface';
import {BaseFragment} from '../../lib'
class MachineFiltersFragment extends BaseFragment{
	Price:PromodElementType
	filterButton:PromodElementType
	workVolume:PromodElementType
	manuFacturer:PromodElementType
	root:PromodElementType
	constructor() {
		super('xpath=//*[@class="table filtering"]/parent::*')
		this.manuFacturer = this.root.$('.filtering input[placeholder="Виробник"]');
		this.workVolume = this.root.$(`.filtering input[placeholder="Робочий об'єм"]`);
		this.Price = this.root.$(`.filtering input[placeholder="Ціна"]`);
		this.filterButton = this.root.$('xpath=//*[text()="Фільтрувати"]');
	}
	async filter(filterData: {manuFacturer?: string; workVolume?: string; Price?: string}) {
		await this.WaitFotFragmentReady();
		const filterDataKeys = Object.keys(filterData); //['username','password'],['password','username'],['username],['password']
		for (const key of filterDataKeys) {
			const value = filterData[key];
			await this[key].sendKeys(value);
		}
		await this.filterButton.click();
	}
}

export { MachineFiltersFragment}