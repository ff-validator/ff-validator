// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isNumber, isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const integer = (errorMessage: string): IValidFn => (value, allValues) =>
	isValid(isNumber(value) && Number.isInteger(Number(value)), errorMessage);
