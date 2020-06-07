// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { urlHttpsProtocol } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid url characters', () => {
	['//stackoverflow.com', 'http://stackoverflow.com'].forEach((url, i) => {
		test(`test #${++i}: ${url}`, () => {
			const validate = urlHttpsProtocol('error');
			const { valid, errorMessage } = validate(url, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
