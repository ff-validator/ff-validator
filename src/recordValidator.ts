// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { IValidFn } from './core';
import fieldValidator from './fieldValidator';

// -----------------------------------------------------------------------------
// field validator
// -----------------------------------------------------------------------------

interface IPlainObject<GValue = any> {
	[p: string]: GValue;
}

export default function <GValue = any, GAllValues = GValue, GMeta = GValue>(
	allValues: IPlainObject,
	allRules: IPlainObject<(IValidFn | null)[]>
): { [p: string]: string } {
	const errors: IPlainObject<string> = {};
	for (const name in allRules) {
		if (allRules.hasOwnProperty(name)) {
			const validator = fieldValidator<GValue, GAllValues, GMeta>(allRules[name]);
			const errorMessage = validator(allValues[name], allValues);
			if (errorMessage !== undefined) {
				errors[name] = errorMessage;
			}
		}
	}
	return errors;
}
