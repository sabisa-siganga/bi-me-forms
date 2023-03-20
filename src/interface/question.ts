interface QuestionInterface {
	code: string;
	text: string;
	type: string;
}

export type TextQuestionInterface = QuestionInterface & {
	placeholder: string;
	conditions: {
		question: string;
		operator: string;
		value: string;
	}[];
};

export type BooleanQuestionInterface = QuestionInterface & {
	trueLabel: string;
	falseLabel: string;
	controlType: string;
};

export type QuestionDataInterface = BooleanQuestionInterface & TextQuestionInterface;
