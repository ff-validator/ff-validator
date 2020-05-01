// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {range} from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be invalid', () => {
	['3', '12', 20, 'Text', null, undefined, true].forEach((content, i) => {
		it(`test #${++i} ${content}`, () => {
			const validate = range('error', 5, 10);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
