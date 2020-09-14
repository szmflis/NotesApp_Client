import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const H3 = styled.h3`
  text-decoration: none;
  padding: ${({ padding }) => padding || '0px'};
  color: ${({ color }) => color || theme.colors.white};
  font-size: ${({ size }) => size || theme.fontSize.big};
  font-weight: ${({ weight }) => weight || theme.fontWeight.bold};
  opacity: ${({ opacity }) => opacity || 1};
`
