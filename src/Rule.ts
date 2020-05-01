// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

export interface IRuleResult {
	valid: boolean;
	errorMessage?: string;
}

// -----------------------------------------------------------------------------
// Rule
// -----------------------------------------------------------------------------

export default abstract class Rule {
	protected errorMessage = 'Error!';

	protected result(valid: boolean): IRuleResult {
		return {
			valid,
			errorMessage: valid === true ? undefined : this.errorMessage
		};
	}

	validate<GValue = string, GAllValues = GValue>(
		value: GValue,
		allValues: { [p: string]: GAllValues }
	): IRuleResult {
		return this.result(true);
	}
}
