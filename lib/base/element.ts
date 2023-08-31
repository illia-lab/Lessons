import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition, isNull } from 'sat-utils';
import {LayerBase} from './layer.base';
import express from 'express-pino-logger';
import logger from '../../framework/logger';

const PORT = 3000;
const app = express();


class BaseElement extends LayerBase {
  constructor(root: string | PromodElementType, name: string) {
    super(root, name);
  }
/**
   * that function waits until fragment root will be visible, if condition is false throws error
   * @example
   * this.WaitFotFragmentReady()
   * @param {} nothing
   */
  async waitForRootReady() {
    logger.info('waitForRootReady function wait until root selector be present,it userd in sendKeys,getData and in click methods')
    await waitForCondition(async () => await this.root.isPresent(), {
      timeout: 7500,
      message: (time, err = 'no errors') =>
        `${this.constructor.name} ${this.id} is not visible, waiting time ${time}, error: ${err}`,
    });
  }
/**
 * @info action function gets actionName and if actionName isNull it changed it to 'click'
 * @param {string| null} actionName
 */
  async action(actionName: string | null) {
    logger.info('action function gets actionName and if actionName isNull it changed it to click')
    if (isNull(actionName)) {
      actionName = 'click';
    }

    //TODO implement more base actions
    await this[actionName]();
  }
/**
 * @info click method click on root selector elements
 */

  private async click() {
    logger.info('click method click on root selector elements')
    await this.root.click();
  }
/**
 * @info 'getData getsText from root elemnts'
 * @returns await this.root.getText();
 */
  async getData(): Promise<string> {
    logger.info('getData getsText from root elemnts')
    await this.waitForRootReady();
    return await this.root.getText();
  }
}

export { BaseElement };
