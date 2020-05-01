// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isString, isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const minLength = (errorMessage: string, min: number): IValidFn => (value, allValues) =>
	isValid(
		(isString(value) || Array.isArray(value)) && value.length >= min,
		errorMessage
	);
