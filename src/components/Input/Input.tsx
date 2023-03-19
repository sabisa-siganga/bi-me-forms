import React from "react";
import { StyledError, StyledInput, ReversedContainer } from "./InputStyled";

interface InputProps {
	name: string;
	id:string;
	label: string;
	placeholder: string;
	type: "text" | "file" | "submit";
	value: string;
	error?: string;
	onChange(event: React.ChangeEvent): void;
	onBlur(event: React.FocusEvent): void;
}

function Input(props: InputProps) {
	return (
		<StyledInput className={props.error? 'error' : ''}>
			<ReversedContainer>
				<input
					type={props.type}
					name={props.name}
					id={props.id}
					onChange={props.onChange}
					onBlur={props.onBlur}
				/>
				<label htmlFor={props.id}>{props.label}</label>
			</ReversedContainer>

			{props.error && <StyledError> {props.error}</StyledError>}
		</StyledInput>
	);
}
 Input.defaultProps={
	error:undefined,
 }
export default Input;
