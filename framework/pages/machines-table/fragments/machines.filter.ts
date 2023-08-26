import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../../../lib';

class MachineFiltersFragment extends BaseFragment {
  Price: PromodElementType;
  filter: PromodElementType;
  workVolume: PromodElementType;
  manuFacturer: PromodElementType;
  root: PromodElementType;

  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
    this.manuFacturer = this.root.$('.filtering input[placeholder="Виробник"]');
    this.workVolume = this.root.$(`.filtering input[placeholder="Робочий об'єм"]`);
    this.Price = this.root.$(`.filtering input[placeholder="Ціна"]`);
    this.filter = this.root.$('xpath=.//*[text()="Фільтрувати"]');
  }
}

export { MachineFiltersFragment };
