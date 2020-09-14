import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Img = styled.img`
  width: ${({ size }) => size || `${theme.sizes[2]}px`};
  height: ${({ size }) => size || `${theme.sizes[2]}px`};
`
