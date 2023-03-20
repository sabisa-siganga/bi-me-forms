export function operators(initialValue: any, operator: string, postValue: any) {
	switch (operator) {
		case '>=':
			return initialValue >= postValue;
		case '<=':
			return initialValue <= postValue;
		case '>':
			return initialValue > postValue;
		case '===':
			return initialValue === postValue;
		case '<':
			return initialValue < postValue;
		case '==':
			return initialValue == postValue;
		case '!==':
			return initialValue !== postValue;
		case '!=':
			return initialValue != postValue;
	}
}
