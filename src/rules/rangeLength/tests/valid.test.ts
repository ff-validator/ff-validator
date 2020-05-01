// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {rangeLength} from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be valid', () => {
	['01234', '0123456', '0123456789', new Array(7).fill(null)].forEach((content, i) => {
		it(`test #${++i} ${content}`, () => {
			const validate = rangeLength('error', 5, 10);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
