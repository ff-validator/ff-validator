// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { isValid, IValidFn, _get } from '../../core';
import { required } from '../required';

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export const requiredIfCheckedRuleName = 'requiredIfChecked';
export const requiredIfCheckerName = 'checker';
export const requiredIfChecked = (errorMessage: string, name: string): IValidFn => {
	const rule: IValidFn = (value, allValues) => {
		const checked = _get(allValues, name);
		if (checked === true) {
			const { valid } = required('')(value, allValues);
			return isValid(valid, errorMessage);
		}
		return isValid(true, errorMessage);
	};
	rule.ruleName = requiredIfCheckedRuleName;
	rule.details = {
		[requiredIfCheckerName]: name
	};
	return rule;
};
