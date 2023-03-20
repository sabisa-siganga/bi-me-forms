import React from 'react';
import { StyledButton } from './ButtonStyled';

interface Props {
	disabled?: boolean;
	children: React.ReactNode;
	type: 'button' | 'submit';
}

function Button(props: Props) {
	return (
		<StyledButton disabled={props.disabled} type={props.type}>
			{props.children}
		</StyledButton>
	);
}

Button.defaultProps = {
	disabled: false,
};

export default Button;
