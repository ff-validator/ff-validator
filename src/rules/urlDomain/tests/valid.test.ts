// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { urlDomain } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid url domains', () => {
	[
		'https://stackoverflow.com/questions/1856785/characters-allowed-in-a-url',
		'https://play.google.com/store/apps/details?id=com.skgames.trafficracer%22',
		'http://mplay.google.co.in/sadfask/asdkfals?dk=10',
		'http://lplay.google.co.in/',
		'http://play.google.co.in/sadfask/asdkfals?dk=10',
		'http://tplay.google.co.in/sadfask/asdkfals?dk=10',
		'//google.co.in/sadfask/asdkfals?dk=10',
		'www.google.co.in/sadfask/asdkfals?dk=10',
		'http://user:pass@google.com/?a=b#asdd',
		'https://www.compzets.com?asd=10',
		'www.compzets.com?asd=10'
	].forEach((url, i) => {
		test(`test #${++i}: ${url}`, () => {
			const validate = urlDomain('error');
			const { valid, errorMessage } = validate(url, {});
			expect(valid).toBeTruthy();
			expect(errorMessage).toBeUndefined();
		});
	});
});
