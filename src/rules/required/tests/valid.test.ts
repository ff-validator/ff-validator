// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { required } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be valid', () => {
	['0', 0, true, 'Text', [0]].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = required('');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
