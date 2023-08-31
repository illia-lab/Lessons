import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import {$} from '../../lauch/engine';
import express from 'express-pino-logger';
import logger from '../../framework/logger';

class LayerBase {
  root: PromodElementType;
  id: string;

  constructor(root: string | PromodElementType, name: string) {
    this.root = typeof root === 'string' ? $(root) : root;
    this.id = name;
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
}

export { LayerBase };
