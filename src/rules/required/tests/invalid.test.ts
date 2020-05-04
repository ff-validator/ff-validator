// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { required } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid required', () => {
	['', null, false, undefined, NaN, []].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = required('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
