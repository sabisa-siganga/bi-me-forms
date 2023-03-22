import styled from 'styled-components';

export const StyledInput = styled.div`
	input {
		width: 100%;
		border: none;
		border-bottom: 2px solid #858587;
		font-weight: 500;
		height: 30px;
		font-weight: 400;
		font-size: 17px;

		&:focus {
			border-bottom-color: #467ee7;
			~ label {
				color: #467ee7;
			}
		}
	}

	label {
		display: block;
		margin-bottom: 6px;
		font-size: 17px;
		color: #858587;
	}

	&.error {
		input {
			border-bottom-color: red;
			&:focus ~ label {
				color: red;
			}
		}
		label {
			color: red;
		}
	}
`;

export const StyledError = styled.div`
	color: red;
	padding-top: 10px;
	font-size: 15px;
`;

export const ReversedContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	position: relative;
`;

export const InfoSVG = styled.img`
	height: 23px;
	width: 23px;
	object-fit: contain;
	position: absolute;
    right: 1px;
    bottom: 7px;
`