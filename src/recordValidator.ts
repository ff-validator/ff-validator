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

export default async function <GValue = any, GAllValues = GValue, GMeta = GValue>(
	allValues: IPlainObject,
	allRules: IPlainObject<(IValidFn | null)[]>
): Promise<{ [p: string]: string }> {
	const errors: IPlainObject<string> = {};
	for (const name in allRules) {
		if (allRules.hasOwnProperty(name)) {
			const validator = fieldValidator<GValue, GAllValues, GMeta>(allRules[name]);
			const errorMessage = await validator(allValues[name], allValues);
			if (errorMessage !== undefined) {
				errors[name] = errorMessage;
			}
		}
	}
	return errors;
}
