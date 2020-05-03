// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { number } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	['100,345', '99xx'].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = number('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
