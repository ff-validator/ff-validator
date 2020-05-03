// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { emailSignAtMultiple } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid multiple usage of "@" in emails', () => {
	['site@demo@site.com'].forEach((email, i) => {
		it(`test #${++i}: ${email}`, () => {
			const validate = emailSignAtMultiple('error');
			const { valid, errorMessage } = validate(email, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
