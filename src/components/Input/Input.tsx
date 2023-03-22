import React from 'react';
import { StyledError, StyledInput, ReversedContainer, InfoSVG } from './InputStyled';
import infoSVG from '../../assets/info.svg'

interface InputProps {
	name: string;
	id: string;
	label: string;
	placeholder: string;
	type: 'text' | 'file' | 'submit';
	value: string;
	error?: string | boolean;
	onChange(event: React.ChangeEvent): void;
	onBlur(event: React.FocusEvent): void;
}

function Input(props: InputProps) {
	return (
		<StyledInput className={props.error ? 'error' : ''}>
			<ReversedContainer>
				<input
					type={props.type}
					name={props.name}
					id={props.id}
					onChange={props.onChange}
					onBlur={props.onBlur}
					placeholder={props.placeholder}
				/>
				<label htmlFor={props.id}>{props.label}</label>
				<InfoSVG src={infoSVG} alt="" />
			</ReversedContainer>

			{props.error && <StyledError> {props.error}</StyledError>}
		</StyledInput>
	);
}

Input.defaultProps = {
	error: undefined,
};
export default Input;
