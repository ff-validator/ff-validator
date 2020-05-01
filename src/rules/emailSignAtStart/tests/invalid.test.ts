// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {emailSignAtStart} from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid starts with "@" in emails', () => {
	['@mail.com'].forEach((email, i) => {
		it(`test #${++i}: ${email}`, () => {
			const validate = emailSignAtStart('error');
			const { valid, errorMessage } = validate(email, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
