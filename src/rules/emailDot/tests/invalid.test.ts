// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { emailDot } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid dots in emails', () => {
	[
		'site@mail.com.',
		'site@.mail.com',
		'site.@mail.com',
		'site@mail...com',
		'si...te@mail.com'
	].forEach((email, i) => {
		test(`test #${++i}: ${email}`, () => {
			const validate = emailDot('error');
			const { valid, errorMessage } = validate(email, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
