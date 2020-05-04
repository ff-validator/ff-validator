// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { rangeLength } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid range length', () => {
	['0123', '01234567891', new Array(2).fill(null), new Array(12).fill(null)].forEach(
		(content, i) => {
			test(`test #${++i} ${content}`, () => {
				const validate = rangeLength('error', 5, 10);
				const { valid, errorMessage } = validate(content, {});
				expect(valid).toBeFalsy();
				expect(errorMessage).toBeDefined();
				expect((errorMessage || '').length).toBeGreaterThan(0);
			});
		}
	);
});
