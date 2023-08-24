import type { PromodElementType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import { $ } from '../../lauch/engine';

class BasePage {
	root: PromodElementType;

	constructor(root: string | PromodElementType) {
		this.root = typeof root === 'string' ? $(root) : root;
	}

	/**
	 * метод очікує що рутове значення буде відображене
	 * @param {void} nothing
	 * @returns {Promise} повертає Promise
	 */

	async WaitForPageReady() {
		await waitForCondition(async () => await this.root.isDisplayed(), {
			timeout: 7500,
			message: () => `${this.constructor.name} is not visible`,
		});
	}
}
export {BasePage}
