import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Input = styled.input`
  width: ${({ width }) => width || '100%'};
  font-size: ${({ fontSize }) => fontSize || theme.fontSize.big};
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

export const StyledDateInput = styled(Input)`
  width: 80%;
  border: none;
  border-bottom: 3px solid ${theme.colors.grey};
  margin-left: 5px;
  padding: 5px;

  &:hover {
    border-bottom: 3px solid ${theme.colors.primary};
  }

  transition: border 0.5s;
`
