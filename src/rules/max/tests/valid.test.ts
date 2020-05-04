// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { max } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid max number', () => {
	['5', 4, '10', 10].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = max('error', 10);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
