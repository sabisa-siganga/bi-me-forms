import React from 'react';
import { StyledCircle, StyledRadio } from './RadioButtonStyled';

interface RadioButtonProps {
	onChange(event: React.ChangeEvent<HTMLInputElement>): void;
	labelText: string;
	id: string;
	value: string;
	onBlur(event: React.FocusEvent<HTMLInputElement, Element>): void;
	name: string;
}

function RadioButton(props: RadioButtonProps) {
	return (
		<StyledRadio>
			<input
				id={props.id}
				type='radio'
				onChange={props.onChange}
				value={props.value}
				name={props.name}
				onBlur={props.onBlur}
			/>
			<label htmlFor={props.id}>
				<StyledCircle className='styled-circle'>
					<div />
				</StyledCircle>
				<span>{props.labelText}</span>
			</label>
		</StyledRadio>
	);
}

export default RadioButton;
