// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noSpacesAtEnd } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	[
		'D?    ',
		'0в ',
		`lorem
`
	].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = noSpacesAtEnd('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
