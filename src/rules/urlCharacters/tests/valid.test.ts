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
		'https://play.google.com/store/apps/details?id=com.skgames.trafficracer%22',
		'http://user:pass@google.com/?a=b#asdd',
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
