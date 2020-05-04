// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noDigits } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid noDigits', () => {
	['Petr 1', 'dfg4sdf', '16x9'].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = noDigits('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
