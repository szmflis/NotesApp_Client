import styled from 'styled-components'
import { variant } from 'styled-system'
import { theme } from '../../styles/theme'
import buttons from '../../styles/variants/buttons'

const buttonVariant = variant({ variants: buttons })

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: ${({ width }) => width || `${theme.sizes[5]}px`};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ padding }) => padding || '10px'};
  margin: ${({ margin }) => margin || '10px 0px 10px 0px'};
  background: ${({ background }) => background || theme.colors.primary};

  transition: background .2s;

  ${buttonVariant}
`
