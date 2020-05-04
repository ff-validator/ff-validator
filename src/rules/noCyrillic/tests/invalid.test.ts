// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noCyrillic } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid no characters', () => {
	['gmаіl', 'sеvеn', 'GО'].forEach((url, i) => {
		test(`test #${++i}: ${url}`, () => {
			const validate = noCyrillic('error');
			const { valid, errorMessage } = validate(url, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
