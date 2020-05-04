// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { minLength } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid min length', () => {
	[
		'In 1985 Aldus Corporation',
		'Do you like Cheese Whiz?',
		"That's what is Lorem Ipsum"
	].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = minLength('error', 3);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
