import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment, Button, Input } from '../../../../lib';

class MachineFiltersFragment extends BaseFragment {
  priceForm: Input;
  filter: Button;
  workVolume: Input;
  manuFacturer: Input;

  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
    this.manuFacturer = this.init(this.root.$('.filtering input[placeholder="Виробник"]'), 'Manufacturer Input', Input);
    this.workVolume = this.init(this.root.$(`.filtering input[placeholder="Робочий об'єм"]`), 'WorkVolume form', Input);
    this.priceForm = this.init(this.root.$(`.filtering input[placeholder="Ціна"]`), 'Price form', Input);
    this.filter = this.init(this.root.$('xpath=.//*[text()="Фільтрувати"]'), 'Filter button', Button);
  }
}

export { MachineFiltersFragment };
