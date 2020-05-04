// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { urlCharacters } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid url characters', () => {
	[
		'my site',
		'this^is',
		'мой-сайт.ком'
	].forEach((url, i) => {
		test(`test #${++i}: ${url}`, () => {
			const validate = urlCharacters('error');
			const { valid, errorMessage } = validate(url, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
