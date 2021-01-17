import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const ButtonBase = styled.button`
  display: inline-block;
  background-color: ${props => props?.theme?.palette?.primary?.main};
  color: ${props => props?.theme?.palette?.primary?.contrastText};
  padding: 1rem 2rem;
  font-size: 16px;
  font-weight: 600;
  border: 0;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`

export interface ButtonProps {
  label?: string
  size?: 'small' | 'medium' | 'large'
  children?: any
}

const Button = (props: ButtonProps) => {
  const theme = useContext(ThemeContext)
  return (
    <ButtonBase {...props} theme={theme}>
      {props?.children || props?.label}
    </ButtonBase>
  )
}

export default Button
