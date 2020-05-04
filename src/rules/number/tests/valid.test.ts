// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { number } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid number', () => {
	['100', 100.5, -78, '60.78', '-60.78'].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = number('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
