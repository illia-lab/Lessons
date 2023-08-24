import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import { $, $$ } from '../../lauch/engine';
import { Collection } from '../../lib/base/collection';

class CombineTableFragment extends BaseFragment {
  tableDynamicHeader: PromodElementType;
  root: PromodElementType;
  tableDynamicBody: PromodElementType;
  combainTableRow: PromodElementType;
  producerAndBrand: PromodElementType;
  machineMass: PromodElementType;
  machineHeight: PromodElementType;
  machineClass: PromodElementType;
  machinePrice: PromodElementType;

  constructor(root) {
    //@ts-ignore
    super(root);
    this.tableDynamicHeader = this.root.$('.dynamic_table_header');
    this.tableDynamicBody = this.root.$('.dynamic_table_body');
    this.combainTableRow = $$('.dynamic_table_row').get(0);
    this.producerAndBrand = this.root.$('div:nth-child(1)');
    this.machineMass = this.root.$('div:nth-child(2)');
    this.machineHeight = this.root.$('div:nth-child(3)');
    this.machineClass = this.root.$('div:nth-child(4)');
    this.machinePrice = this.root.$('div:nth-child(5)');
  }
}

export { CombineTableFragment };
