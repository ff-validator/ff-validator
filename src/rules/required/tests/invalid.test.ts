// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { required } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	['', null, false, undefined, NaN, []].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = required('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
