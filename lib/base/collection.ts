import { PromodElementsType } from 'promod/built/interface';

import { $$ } from '../../lauch/engine';

class Collection {
  roots: PromodElementsType
  fragment;
  id:string

  constructor(selector: string | PromodElementsType,name:string ,fragment) {
    this.roots = typeof selector === 'string' ? $$(selector) : selector;
    this.id = name
    this.fragment = fragment;
  }

  async getData(data: { [k: string]: null } = {}) {
    const FragmentClass = this.fragment;
    const result = await this.roots.map(async (el, index) => {
      const CollectionFragmentInstance = new FragmentClass(el, `${this.id} ${index}`);
      const CollectionFragmentData = await CollectionFragmentInstance.getData(data);
      return CollectionFragmentData;
    });
    return result;
  }
}
export { Collection };
