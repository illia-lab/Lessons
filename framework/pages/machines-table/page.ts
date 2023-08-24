import { Collection } from '../../../lib/base/collection';
import { BasePage } from '..';
import {MechineListRowFragment} from './fragments/machine.list.row';
import {MachineFiltersFragment} from './fragments/machines.filter'

class MachinesTablePage extends BasePage {
  machines;
  filters: MachineFiltersFragment

  constructor() {
    super('#table_page', 'Machine table page');
this.filters = this.init('xpath=//*[@class="table filtering"]/parent::*', 'Filters', MachineFiltersFragment)
    this.machines = this.init(
      '#table_page > div.machies_list_section > table > tbody > tr',
      'Machines row item',
      Collection,
      MechineListRowFragment,
    );
  }
}
export { MachinesTablePage };
