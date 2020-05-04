// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { required } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid required', () => {
	['0', 0, true, 'Text', [0]].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = required('');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
