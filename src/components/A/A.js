import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const A = styled.a`
  text-decoration: none;
  color: ${theme.colors.black};
  margin: ${({ margin }) => margin || '0px 10px 0px 10px'};
`
