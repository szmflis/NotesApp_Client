import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Input = styled.input`
  width: 100%;
  font-size: ${theme.fontSize.big};
  border: 1px solid ${theme.colors.grey};
  background: none;
  padding: 10px;
  
  transition: 0.5s border-color;

  &:hover {
    border-color: ${theme.colors.primaryLight};
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primaryDark};
  }
`

export const InputWrapper = styled.div`
  width: 80%;
  margin: 10px;
`
