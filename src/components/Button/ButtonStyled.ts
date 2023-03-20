import styled from "styled-components";

export const StyledButton = styled.button`
  width: 125px;
  color: #fff;
  display: flex;
  background-color: #00b5e1;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #00b5e1;
  justify-content: center;
  height: 45px;
  font-size: 19px;
  cursor: pointer;

  &:disabled {
	opacity: 0.5;
	cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: rgb(0, 156, 192);
  }

`;
