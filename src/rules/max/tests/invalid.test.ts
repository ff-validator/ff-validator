// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { max } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	['20', '101', 20, 'Text', null, undefined, true].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = max('error', 10);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
