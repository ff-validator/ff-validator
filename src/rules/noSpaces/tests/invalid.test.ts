// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noSpaces } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	[
		'I n',
		'x  ',
		'   D?',
		`sdf
sdf`
	].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = noSpaces('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
