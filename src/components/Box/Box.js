import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Box = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  background-color: ${({ color, theme }) => color || theme.colors.lightGrey};

  width: ${({ width }) => width};

  padding: ${({ pad }) => pad || `${theme.space[4]}px`};
  margin: ${({ mar }) => mar || `${theme.space[4]}px`};
  border-radius: ${({ rad }) => rad || `${theme.radii[1]}px`};

  opacity: ${({ opacity }) => opacity};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  border: ${({ border }) => border};
  overflow: ${({ overflow }) => overflow};
`

export const Card = styled(Box)`
  align-items: center;
  min-width: 400px;
  width: 25vw;

  padding: ${theme.space[5]}px;

  @media (max-width: 840px) {
    width: 80vw;
  }
  
  @media (max-width: 500px) {
    width: 100vw;
  }
`
