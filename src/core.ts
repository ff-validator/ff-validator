// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { getIn } from 'plain-object-helpers/dist/get-in';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface IValidResult {
	valid: boolean;
	errorMessage?: string;
}

export interface IValidFn<GValue = any, GAllValues = GValue, GMeta = GValue> {
	(value: GValue, allValues: { [p: string]: GAllValues }, meta?: GMeta[]): IValidResult;
	ruleName?: string;
	details?: { [p: string]: any };
}

// -----------------------------------------------------------------------------
// Utils
// -----------------------------------------------------------------------------

export const isValid = (valid: boolean, errorMessage: string): IValidResult => ({
	valid,
	errorMessage: valid === true ? undefined : errorMessage
});

export const isString = (value: any): value is string => typeof value === 'string';
export const isNumber = (value: any): value is number => {
	if (typeof value === 'string' && value.length > 0) {
		value = +value;
	}
	if (typeof value === 'number') {
		return Number.isFinite(value);
	}
	return false;
};

export const _get = getIn;
