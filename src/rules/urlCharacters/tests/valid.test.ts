// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { urlCharacters } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid url characters', () => {
	[
		'https://stackoverflow.com/questions/1856785/characters-allowed-in-a-url',
		'/index',
		'translations?tab=1',
		'/content.html#anchor-readme'
	].forEach((url, i) => {
		test(`test #${++i}: ${url}`, () => {
			const validate = urlCharacters('error');
			const { valid, errorMessage } = validate(url, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
