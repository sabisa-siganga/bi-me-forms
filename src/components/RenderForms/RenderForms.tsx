import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
import { QuestionDataInterface } from '../../interface/question';
import { operators } from './operator';
import { StyledError } from '../Input/InputStyled';
import Button from '../Button/Button';
import { StyledRenderForms } from './RenderFormsStyled';

interface RenderFormsProps {
	questions: QuestionDataInterface[];
}

function RenderForms(props: RenderFormsProps) {
	const { questions } = props;

	const startingValues: Record<string, string> = questions.reduce(
		(accumulator, value) => {
			return { ...accumulator, [value.code]: '' };
		},
		{}
	);

	const dataConstruction = (
		inputData: QuestionDataInterface[],
		values: Record<string, string>
	) => {
		let data: Record<string, string> = {};

		inputData.forEach((question) => {
			const currentValue = values[question.code];
			let results = currentValue;

			if (question.conditions) {
				let found = false;

				question.conditions.forEach((condition) => {
					const value = values[condition.question];

					if (
						value &&
						operators(value, condition.operator, condition.value)
					) {
						found = true;
					}
				});

				if (!found) {
					results = '';
				}
			}

			data[question.code] = results;
		});

		return data;
	};

	const dynamicValidation = (data: QuestionDataInterface) => {
		let conditional: string[] = [];

		if (data.conditions) {
			conditional = data.conditions.map(
				(condition) => condition.question
			);
		}

		if (data.type === 'bool') {
			if (data.conditions) {
				return Yup.string().required('Required');
			}

			return Yup.string().required('Required');
		}

		if (data.type === 'text') {
			if (data.conditions) {
				return Yup.string()
					.min(2, 'Must be at least 2 characters')
					.when(conditional, (inputData, schema) => {
						const findDep = data.conditions.find((condition) => {
							const schemaInfo = schema as never as {
								deps: string[];
							};
							const dependency = schemaInfo.deps.find((dep) => {
								return dep === condition.question;
							});

							if (
								dependency &&
								operators(
									inputData,
									condition.operator,
									condition.value
								)
							) {
								return true;
							}

							return false;
						});

						if (findDep) {
							return Yup.string()
								.min(2, 'Must be at least 2 characters')
								.required('Required');
						}

						return schema;
					});
			}

			return Yup.string()
				.min(2, 'Must be at least 2 characters')
				.optional();
		}

		return {};
	};

	const validationSchema = questions.reduce((prev, current) => {
		return {
			...prev,
			[current.code]: dynamicValidation(current),
		};
	}, {});

	const formikHook = useFormik({
		initialValues: startingValues,
		validationSchema: Yup.object(validationSchema),
		onSubmit: (values) => {
			const data = dataConstruction(questions, values);

			alert(JSON.stringify(data));
			window.location.reload();
		},
	});

	function hasError(field: string) {
		if (formikHook.touched[field] && formikHook.errors[field]) {
			return true;
		}

		return false;
	}

	function checkConditions(question: QuestionDataInterface) {
		if (typeof question.conditions === 'undefined') {
			return true;
		}

		let results = false;

		question.conditions.forEach((condition) => {
			const value = formikHook.values[condition.question];

			if (
				value &&
				operators(value, condition.operator, condition.value)
			) {
				results = true;
			}
		});

		return results;
	}

	return (
		<div>
			<form onSubmit={formikHook.handleSubmit}>
				{questions.length === 0 && (
					<div className='no-questions'>No available questions!</div>
				)}
				{questions.length > 0 && (
					<>
						{questions.map((question, index) => {
							if (
								question.type === 'text' &&
								checkConditions(question)
							) {
								return (
									<StyledRenderForms className='fields' key={question.code}>
										<Input
											name={question.code}
											onChange={formikHook.handleChange}
											onBlur={formikHook.handleBlur}
											id={`${
												question.code
											}-${index.toString()}`}
											type={question.type}
											placeholder={
												question.placeholder || ''
											}
											label={question.text}
											value={
												formikHook.values[question.code]
											}
											error={
												hasError(question.code) &&
												formikHook.errors[question.code]
											}
										/>
									</StyledRenderForms>
								);
							}

							if (
								question.type === 'bool' &&
								checkConditions(question)
							) {
								return (
									<StyledRenderForms
										className={`fields ${
											hasError(question.code)
												? 'has-error'
												: ''
										}`}
										key={question.code}
									>
										<p>{question.text}</p>
										<div className='radio-buttons'>
											<RadioButton
												id={`${
													question.code
												}-${index.toString()}`}
												labelText={
													question.trueLabel || ''
												}
												name={question.code}
												value='true'
												onChange={
													formikHook.handleChange
												}
												onBlur={formikHook.handleBlur}
											/>
											<RadioButton
												id={`${question.code}-${
													index + 1
												}`}
												labelText={
													question.falseLabel || ''
												}
												name={question.code}
												value='false'
												onChange={
													formikHook.handleChange
												}
												onBlur={formikHook.handleBlur}
											/>
										</div>
										{hasError(question.code) && (
											<StyledError>
												{
													formikHook.errors[
														question.code
													]
												}
											</StyledError>
										)}
									</StyledRenderForms>
								);
							}

							return (
								<React.Fragment
									key={`React.Fragment-${index.toString()}`}
								></React.Fragment>
							);
						})}

						<Button type='submit' disabled={!formikHook.isValid}>
							Submit
						</Button>
					</>
				)}
			</form>
		</div>
	);
}

export default RenderForms;
