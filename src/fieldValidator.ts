// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { IValidFn } from './core';
import { requiredRuleName } from './rules/required';

// -----------------------------------------------------------------------------
// field validator
// -----------------------------------------------------------------------------

interface IFieldValidatorFn<GValue = any, GAllValues = GValue, GMeta = GValue> {
	(value: GValue, allValues: { [p: string]: GAllValues }, ...meta: GMeta[]): Promise<
		string | undefined
	>;
}

const hasValue = (value: any) => {
	if (Array.isArray(value)) {
		return value.length > 0;
	}
	return !!value;
};

export default function <GValue = any, GAllValues = GValue, GMeta = GValue>(
	rulesList: (IValidFn | null)[]
): IFieldValidatorFn<GValue, GAllValues, GMeta> {
	const rules: IValidFn[] = rulesList.filter((rule) => rule != null) as IValidFn[];
	return async (value, allValues, ...meta) => {
		let result: string | undefined;
		let hasRequiredRule = false;
		const length = rules.length;
		for (let i = 0; i < length; i++) {
			if (rules[i].ruleName === requiredRuleName) {
				hasRequiredRule = true;
				break;
			}
		}
		if (hasValue(value) || hasRequiredRule) {
			for (let i = 0; i < length; i++) {
				const { valid, errorMessage } = await rules[i](value, allValues, meta);
				if (valid === false) {
					result = errorMessage || 'Error!';
					break;
				}
			}
		}
		return result;
	};
}
