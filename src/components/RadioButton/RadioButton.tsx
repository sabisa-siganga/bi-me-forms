import React from 'react'
import { StyledCircle, StyledRadio } from './RadioButtonStyled'

function RadioButton() {
  return (
    <StyledRadio>
        <input type='radio'/>
        <label htmlFor=''>
            <StyledCircle className="styled-circle">
                <div/>
            </StyledCircle>
                <span>Yes</span>
        </label>
    </StyledRadio>
  )
}

export default RadioButton