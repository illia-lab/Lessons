import type { PromodElementType } from 'promod/built/interface';
import { asyncMap, lengthToIndexesArray } from 'sat-utils';
import { $, $$ } from '../../../lauch/engine';
import { CombineTableFragment } from './fragments/combine.table';
import {BasePage} from '../../../lib/base/page';
import { Collection } from '../../../lib/base/collection';

class CombinesPage extends BasePage {
  combinesTable: CombineTableFragment;
  constructor() {
    super('#combains_page', 'Combines page');
    this.combinesTable = this.init(
      '#combains_page > div:nth-child(2) > div > div > div',
      'Combines Table',
      Collection,
      CombineTableFragment
    );
  }
}
export { CombinesPage };
