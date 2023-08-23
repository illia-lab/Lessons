import type { PromodElementType } from 'promod/built/interface';
import { asyncMap, lengthToIndexesArray } from 'sat-utils';
import { $, $$ } from '../../lauch/engine';
import { MechineListRowFragment } from '../fragments/machine.list.row';

class CollectionFragment {
  selector;
  fragment;

  constructor(selector, fragment) {
    this.selector = $$(selector);
    this.fragment = fragment;
  }

  async getData() {
		const count = await this.selector.count();
		console.log(count)

    const result = await asyncMap(lengthToIndexesArray(count), async (index) => {
      const machineRow = new this.fragment(this.selector.get(index));

      return machineRow.getData();
    });

    return result;
  }
}
export { CollectionFragment };
