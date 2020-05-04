// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { emailDomain } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid domain names in emails', () => {
	['site@mail', 'site@mail-com', 'site@m.m'].forEach((email, i) => {
		test(`test #${++i}: ${email}`, () => {
			const validate = emailDomain('error');
			const { valid, errorMessage } = validate(email, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
