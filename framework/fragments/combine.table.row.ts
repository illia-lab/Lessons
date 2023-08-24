import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import { $, $$ } from '../../lauch/engine';

class CombineRowFragment extends BaseFragment {
  root: PromodElementType;
  producerAndBrand: PromodElementType;
  machineMass: PromodElementType;
  machineHeight: PromodElementType;
  machineClass: PromodElementType;
  machinePrice: PromodElementType;
  combineRow: PromodElementType;

  constructor(root) {
    //@ts-ignore
    super(root);
    this.producerAndBrand = this.root.$('div:nth-child(1)');
    this.machineMass = this.root.$('div:nth-child(2)');
    this.machineHeight = this.root.$('div:nth-child(3)');
    this.machineClass = this.root.$('div:nth-child(4)');
    this.machinePrice = this.root.$('div:nth-child(5)');
  }
}

export { CombineRowFragment };
