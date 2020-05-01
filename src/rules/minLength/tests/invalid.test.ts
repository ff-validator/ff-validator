// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {minLength} from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	['In', 'D?', "T'", [null, null]].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = minLength('error', 3);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
