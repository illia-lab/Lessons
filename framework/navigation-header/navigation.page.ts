import type { PromodElementType } from 'promod/built/interface';
import { NavigationPanelFragment } from '../../framework/navigation-header/navigation.panel';
import { BasePage } from '../../lib/base/page';

class NavigationPage extends BasePage {
  combineClick: PromodElementType;
  constructor() {
    super('#table_page', 'Navigation Page');
    this.combineClick = this.init('div.header', 'Header', NavigationPanelFragment);
  }
}

export { NavigationPage };
