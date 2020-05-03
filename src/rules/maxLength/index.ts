// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isString, isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const maxLength = (errorMessage: string, max: number): IValidFn => (
	value,
	allValues
) =>
	isValid(
		(isString(value) || Array.isArray(value)) && value.length <= max,
		errorMessage
	);
