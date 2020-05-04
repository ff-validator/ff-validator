// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isString, isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const emailSignAtMultiple = (errorMessage: string): IValidFn => (
	value,
	allValues
) => isValid(isString(value) && value.split('@').length <= 2, errorMessage);
