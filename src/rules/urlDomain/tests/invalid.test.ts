// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { urlDomain } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid url characters', () => {
	['www.google.co.in/sadfask/asdkfals?dk=10', 'www.compzets.com?asd=10'].forEach(
		(url, i) => {
			test(`test #${++i}: ${url}`, () => {
				const validate = urlDomain('error');
				const { valid, errorMessage } = validate(url, {});
				expect(valid).toBeFalsy();
				expect(errorMessage).toBeDefined();
				expect((errorMessage || '').length).toBeGreaterThan(0);
			});
		}
	);
});
