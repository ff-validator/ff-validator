// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { integer } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid integer', () => {
	['100', 100, -78, '60'].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = integer('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
