import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition, isNull } from 'sat-utils';
import { LayerBase } from './layer.base';

class BaseElement extends LayerBase {
  constructor(root: string | PromodElementType, name: string) {
    super(root, name);
  }

  async waitForElementReady() {
    await waitForCondition(async () => await this.root.isPresent(), {
      timeout: 7500,
      message: (time, err = 'no errors') =>
        `${this.constructor.name} ${this.id} is not visible, waiting time ${time}, error: ${err}`,
    });
  }

  async action(actionName: string | null) {
    if (isNull(actionName)) {
      actionName = 'click';
    }

    //TODO implement more base actions
    await this[actionName]();
  }

  private async click() {
    await this.root.click();
  }

  async getData(): Promise<string> {
    await this.waitForElementReady();
    return await this.root.getText();
  }
}

export { BaseElement };
