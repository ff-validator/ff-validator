// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { urlHttpsProtocol } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid url characters', () => {
	['https://stackoverflow.com'].forEach((url, i) => {
		test(`test #${++i}: ${url}`, () => {
			const validate = urlHttpsProtocol('error');
			const { valid, errorMessage } = validate(url, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
