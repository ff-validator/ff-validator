// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn } from '../../core';
import { minLength as minLengthRule } from '../minLength';
import { maxLength as maxLengthRule } from '../maxLength';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const rangeLength = (errorMessage: string, min: number, max: number): IValidFn => (
	value,
	allValues
) => {
	const { valid: minValid } = minLengthRule('', min)(value, allValues);
	const { valid: maxValid } = maxLengthRule('', max)(value, allValues);
	return isValid(minValid && maxValid, errorMessage);
};
