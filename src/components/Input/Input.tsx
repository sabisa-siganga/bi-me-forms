import React from "react";
import { StyledError, StyledInput } from "./InputStyled";


function Input() {

	return (
		<StyledInput>
			<label>liability</label>
			<input type="text" name="liabilty" />

			<StyledError> error message </StyledError>
		</StyledInput>
	);
}

export default Input;
