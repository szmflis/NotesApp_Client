import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Box = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background: ${({ color, theme }) => color || theme.colors.lightGrey};
  width: ${({ width }) => width || `${theme.sizes[7]}px`};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ padding }) => padding || '10px'};
  margin: ${({ margin }) => margin || '10px'};
  border-radius: ${({ radius }) => radius || '5px'};
  opacity: ${({ opacity }) => opacity || 1};
  text-align: ${({ textAlign }) => textAlign};
  border: ${({ border }) => border};
  overflow: ${({ overflow }) => overflow};
`
