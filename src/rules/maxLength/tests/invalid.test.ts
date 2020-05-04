// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { maxLength } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Invalid max length', () => {
	[
		'In 1985 Aldus Corporation launched its first desktop publishing program.',
		'Do you like Cheese Whiz? Spray tan? Fake eyelashes?',
		"That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way.",
		new Array(40).fill(null)
	].forEach((content, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = maxLength('error', 30);
			const { valid, errorMessage } = validate(content, {});
			expect(valid).toBeFalsy();
			expect(errorMessage).toBeDefined();
			expect((errorMessage || '').length).toBeGreaterThan(0);
		});
	});
});
