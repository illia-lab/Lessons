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
/**
 * that method get name and selector data
 * @example const result = await machinesPage.machines.getData({ manuFacturer: null });
 * @param {object} data
 * @returns {any}  return CollectionFragmentData
 */
   //TODO зрозуміти що робить ця функція і що собою являють параметри цієї функції
  async getData(data: { [k: string]: null } = {}) {
    const FragmentClass = this.fragment;
    const result = await this.roots.map(async (el, index) => {
      const CollectionFragmentInstance = new FragmentClass(el, `${this.id} ${index}`);
      console.log(FragmentClass, data)
      const CollectionFragmentData = await CollectionFragmentInstance.getData(data);
      return CollectionFragmentData;
    });
    return result;
  }
}
export { Collection };
