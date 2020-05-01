// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {emailSignAtEnd} from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid ends with "@" in emails', () => {
	['site.mail@'].forEach((email, i) => {
		it(`test #${++i}: ${email}`, () => {
			const validate = emailSignAtEnd('error');
			const { valid, errorMessage } = validate(email, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
