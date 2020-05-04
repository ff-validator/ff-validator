// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { noSpacesAtStart } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid noSpacesAtStart', () => {
	[
		'Lorem',
		'Lorem ipsum',
	].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = noSpacesAtStart('error');
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
