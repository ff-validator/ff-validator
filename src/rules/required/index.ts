// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn } from '../../core';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const requiredRuleName = 'required';
export const required = (errorMessage: string): IValidFn => {
	const rule: IValidFn = (
		value,
		allValues
	) => {
		if (Array.isArray(value)) {
			return isValid(value.length > 0, errorMessage);
		}
		if (value == null) {
			return isValid(false, errorMessage);
		}
		if (typeof value === 'number') {
			return isValid(!isNaN(value), errorMessage);
		}
		return isValid(!!value, errorMessage);
	};

	rule.ruleName = 'required';
	return rule;
};
