// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn } from '../../core';
import { min as minRule } from '../min';
import { max as maxRule } from '../max';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const range = (errorMessage: string, min: number, max: number): IValidFn => (
	value,
	allValues
) => {
	const { valid: minValid } = minRule('', min)(value, allValues);
	const { valid: maxValid } = maxRule('', max)(value, allValues);
	return isValid(minValid && maxValid, errorMessage);
};
