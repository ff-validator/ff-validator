// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn, _get } from '../../core';
import { required } from '../required';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const requiredIfChecked = (errorMessage: string, name: string): IValidFn => (
	value,
	allValues
) => {
	const checked = _get(allValues, name);
	if (checked === true) {
		const { valid } = required('')(value, allValues);
		return isValid(valid, errorMessage);
	}
	return isValid(true, errorMessage);
};
