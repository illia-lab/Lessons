import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';
import { $$ } from '../../lauch/engine';

class MechineListRowFragment extends BaseFragment {
  root: PromodElementType;
  manuFacturer: PromodElementType;
  workVolume: PromodElementType;
  Length: PromodElementType;
  Width: PromodElementType;
  Mass: PromodElementType;
  TractorPower: PromodElementType;
  Price: PromodElementType;

  constructor(selector) {
    super(selector);
    this.manuFacturer = this.root.$('td:nth-child(1) span');
    this.workVolume = this.root.$('td:nth-child(2)');
    this.Length = this.root.$('td:nth-child(3)');
    this.Width = this.root.$('td:nth-child(4)');
    this.Mass = this.root.$('td:nth-child(5)');
    this.TractorPower = this.root.$('td:nth-child(6)');
    this.Price = this.root.$('td:nth-child(7)');
  }

  /**
   * метод який бере текст із селекторів та використовується в подальших цілях
   * @param {void} void не має атрибутів чи пераметрів
   * @returns {string} повертає шуканні данні в нашому випадку ті що в классі
   */

  async getData() {
    await this.WaitFotFragmentReady();
    return {
      manuFacturer: await this.manuFacturer.getText(),
      workVolume: await this.workVolume.getText(),
      Length: await this.Length.getText(),
      Width: await this.Width.getText(),
      Mass: await this.Mass.getText(),
      TractorPower: await this.TractorPower.getText(),
      Price: await this.Price.getText(),
    };
  }
}

export { MechineListRowFragment };
