// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { min } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	['2', '1', 2, 'Text', null, undefined, true].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = min('error', 3);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
