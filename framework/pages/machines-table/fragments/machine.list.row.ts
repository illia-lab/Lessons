import { BaseFragment } from '../../../../lib';
import { Text } from '../../../../lib/elements/text';

class MechineListRowFragment extends BaseFragment {
  manuFacturer: Text;
  workVolume: Text;
  length: Text;
  width: Text;
  mass: Text;
  tractorPower: Text;
  price: Text;

  constructor(selector, name) {
    super(selector, name);

    this.manuFacturer = this.init(this.root.$('td:nth-child(1) span'), 'manufacturer', Text);
    this.workVolume = this.init(this.root.$('td:nth-child(2)'), 'workVolume', Text);
    this.length = this.init(this.root.$('td:nth-child(3)'), 'lenght', Text);
    this.width = this.init(this.root.$('td:nth-child(4)'), 'width', Text);
    this.mass = this.init(this.root.$('td:nth-child(5)'), 'mass', Text);
    this.tractorPower = this.init(this.root.$('td:nth-child(6)'), 'tractorPower', Text);
    this.price = this.init(this.root.$('td:nth-child(7)'), 'Price', Text);
  }
}

export { MechineListRowFragment };
