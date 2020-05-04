// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { range } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid range', () => {
	['5', '10', 10].forEach((content, i) => {
		test(`test #${++i} ${content}`, () => {
			const validate = range('error', 5, 10);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
