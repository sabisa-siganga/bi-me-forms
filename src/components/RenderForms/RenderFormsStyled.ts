import styled from "styled-components";

export const StyledRenderForms = styled.div`
	min-height: 94px;

	&.fields {
		margin-bottom: 25px;
	}

	p {
		margin-top: 0;
		color: #858587;
		font-size: 17px;
	}

	.radio-buttons {
		display: flex;
		column-gap: 25px;
	}

	&.error {
		p {
			color: red;
		}
	}
`;
