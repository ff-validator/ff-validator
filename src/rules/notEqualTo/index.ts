// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn } from '../../core';
import { equalTo } from '../equalTo';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const notEqualTo = (errorMessage: string, name: string): IValidFn => (
	value,
	allValues
) => {
	const { valid } = equalTo('', name)(value, allValues);
	return isValid(!valid, errorMessage);
};
