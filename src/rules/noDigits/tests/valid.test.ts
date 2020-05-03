// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noDigits } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be valid', () => {
	['Petr I'].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = noDigits('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
