// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { integer } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid integer', () => {
	[
		'100,345',
		'99xx',
		100.5,
		'45.01',
		null,
		false,
		NaN,
		true,
		Infinity,
		'Infinity',
		{},
		''
	].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = integer('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
