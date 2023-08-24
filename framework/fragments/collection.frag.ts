import type { PromodElementType } from 'promod/built/interface';
import { asyncMap, lengthToIndexesArray } from 'sat-utils';
import { $, $$ } from '../../lauch/engine';
import { MechineListRowFragment } from '../fragments/machine.list.row';
import { BaseFragment } from '../../lib';

class Collection {
  selector: string;
  fragment;

  constructor(selector: string, fragment) {
    this.selector = selector;
    this.fragment = fragment;
  }

  async getData(data: { [k: string]: null } = {}) {
    const FragmentClass = this.fragment;
    const FragmentRootElements = $$(this.selector);
    const result = await FragmentRootElements.map(async (el) => {
      const CollectionFragmentInstance = new FragmentClass(el);
      const CollectionFragmentData = await CollectionFragmentInstance.getData(data);
      return CollectionFragmentData;
    });
    return result;
  }
}
export { Collection };
