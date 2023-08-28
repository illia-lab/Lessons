import { BaseFragment } from '../../../../lib';
import { Text } from '../../../../lib/elements/text';

class CombineListRowFragment extends BaseFragment {
  producerAndBrand: Text;
  machineMass: Text;
  machineHeight: Text;
  machineClass: Text;
  machinePrice: Text;

  constructor(selector, name) {
    super(selector, name);
    this.producerAndBrand = this.init(this.root.$('div:nth-child(1)'), 'producer and brand', Text);
    this.machineMass = this.init(this.root.$('div:nth-child(2)'), 'machine mass', Text);
    this.machineHeight = this.init(this.root.$('div:nth-child(3)'), 'machine height', Text);
    this.machineClass = this.init(this.root.$('div:nth-child(4)'), 'machine class', Text);
    this.machinePrice = this.init(this.root.$('div:nth-child(5)'), 'machine price', Text);
  }
}

export { CombineListRowFragment };
