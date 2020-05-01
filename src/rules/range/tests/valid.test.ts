// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {range} from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be valid', () => {
	['5', '10', 10].forEach((content, i) => {
		it(`test #${++i} ${content}`, () => {
			const validate = range('error', 5, 10);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
