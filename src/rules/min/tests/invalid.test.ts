// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { min } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid min number', () => {
	['2', '1', 2, 'Text', null, undefined, true].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = min('error', 3);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
