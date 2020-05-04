// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { emailDomain } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid domain names in emails', () => {
	['site@com.ua', 'info@0552.ua', 'name@i.ua'].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = emailDomain('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
