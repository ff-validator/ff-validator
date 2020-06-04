// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { requiredIfChecked } from '../index';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

describe('Valid requiredIfChecked', () => {
	[
		{
			content: 'value',
			field: 'test1',
			expectTrue: true,
			values: {
				test1: true
			}
		},
		{
			content: '',
			field: 'test1.inner',
			expectTrue: false,
			values: {
				test1: {
					inner: true
				}
			}
		},
		{
			content: '',
			field: 'test1.inner',
			expectTrue: true,
			values: {
				test1: {
					inner: false
				}
			}
		},
		{
			content: 'value',
			field: 'test1.inner.deep',
			expectTrue: true,
			values: {
				test1: {
					inner: {
						deep: true
					}
				}
			}
		},
		{
			content: 'value',
			field: 'array[1].inner',
			expectTrue: true,
			values: {
				array: [{}, { inner: true }]
			}
		}
	].forEach(({ content, field, values, expectTrue }, i) => {
		test(`test #${++i}: ${content}`, () => {
			const validate = requiredIfChecked('error', field);
			const { valid, errorMessage } = validate(content, values);
			if (expectTrue) {
				expect(valid).toBeTruthy();
				expect(errorMessage).toBeUndefined();
			} else {
				expect(valid).toBeFalsy();
				expect(errorMessage).toBeDefined();
			}
		});
	});
});
