import { Collection } from '../fragments/collection.frag';
import { BasePage } from '../pages';
import { MechineListRowFragment } from '../fragments/machine.list.row';

class MachinesTablePage extends BasePage {
  MachineCollection;

  constructor() {
    super('#table_page');

    this.MachineCollection = new Collection(
      '#table_page > div.machies_list_section > table > tbody > tr',
      MechineListRowFragment,
    );
  }
}
export { MachinesTablePage };
