// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { min } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be valid', () => {
	['5', '3', 3].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = min('error', 3);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
