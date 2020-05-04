// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noSpacesAtEnd } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid noSpacesAtEnd', () => {
	['Lorem', 'Lorem ipsum'].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = noSpacesAtEnd('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
