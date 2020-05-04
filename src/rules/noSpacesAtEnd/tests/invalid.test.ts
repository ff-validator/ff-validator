// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noSpacesAtEnd } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid noSpacesAtEnd', () => {
	[
		'D?    ',
		'0в ',
		`lorem
`
	].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = noSpacesAtEnd('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
