import styled from 'styled-components';

export const StyledRadio = styled.div`
	height: 48px;
	width: 125px;
	position: relative;

	input {
		visibility: hidden;
		opacity: 0;
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		position: absolute;

		&:checked ~ label {
			border-color: #00add8;
			background-color: #e5f7fb;

			.styled-circle {
				border-color: #00add8;
				background-color: #00add8;
				box-shadow: 0 4px 10px rgba(2, 139, 172, 0.71);
			}
		}
	}

	label {
		border: 1px solid #dcd7d7;
		border-radius: 7px;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 15px;
		cursor: pointer;

		> span {
			font-size: 18px;
			text-transform: uppercase;
		}
	}
`;

export const StyledCircle = styled.div`
	height: 24px;
	width: 24px;
	border: 1px solid #dcd7d7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 8px;

	> div {
		height: 11px;
		width: 11px;
		border-radius: 50%;
		background-color: #fff;
	}
`;
