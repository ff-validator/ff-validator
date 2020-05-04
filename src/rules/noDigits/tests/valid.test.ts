// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noDigits } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid noDigits', () => {
	['Petr I'].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = noDigits('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
