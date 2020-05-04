// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noSpacesAtStart } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid noSpacesAtStart', () => {
	[
		'   D?',
		'  0в',
		`
lorem`
	].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = noSpacesAtStart('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
