// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { maxLength } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Should be valid', () => {
	[
		'In 1985 Aldus Corporation',
		'Do you like Cheese Whiz?',
		"That's what is Lorem Ipsum",
		new Array(20).fill(null),
		new Array(30).fill(null)
	].forEach((content, i) => {
		it(`test #${++i}: ${content}`, () => {
			const validate = maxLength('error', 30);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
