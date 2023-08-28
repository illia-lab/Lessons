import { BaseElement } from '../base/element';
import { PromodElementType } from 'promod/built/interface';

class Button extends BaseElement {
  constructor(root: string | PromodElementType, name: string) {
    super(root, name);
  }

  async sendKeys() {
    throw new TypeError(`${this.constructor.name} ${this.id} does not support sendKeys method`);
  }
}

export { Button };
