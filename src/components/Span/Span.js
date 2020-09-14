import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Span = styled.span`
  font-size: ${({ fontSize }) => fontSize || theme.fontSize.normal};
  margin: ${({ margin }) => margin || '15px 0px 15px 0px'};
  line-height: 25px;
`
