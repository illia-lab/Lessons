import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../../../lib';

class MechineListRowFragment extends BaseFragment {
  root: PromodElementType;
  manuFacturer: PromodElementType;
  workVolume: PromodElementType;
  length: PromodElementType;
  width: PromodElementType;
  mass: PromodElementType;
  tractorPower: PromodElementType;
  price: PromodElementType;

  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);

    this.manuFacturer = this.root.$('td:nth-child(1) span');
    this.workVolume = this.root.$('td:nth-child(2)');
    this.length = this.root.$('td:nth-child(3)');
    this.width = this.root.$('td:nth-child(4)');
    this.mass = this.root.$('td:nth-child(5)');
    this.tractorPower = this.root.$('td:nth-child(6)');
    this.price = this.root.$('td:nth-child(7)');
  }
}

export { MechineListRowFragment };
