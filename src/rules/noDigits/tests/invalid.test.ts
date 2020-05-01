// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {noDigits} from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	['Petr 1', 'dfg4sdf', '16x9'].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = noDigits('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
