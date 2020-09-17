import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '../../styles/theme'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:before {
    content: '${({ labelLeft }) => labelLeft}';
    font-weight: ${theme.fontWeight.bold};
    color: ${({ position }) => position ? theme.colors.primary : theme.colors.black};
    transition: color .5s;
  }

  &:after {
    content: '${({ labelRight }) => labelRight}';
    font-weight: ${theme.fontWeight.bold};
    color: ${({ position }) => position ? theme.colors.black : theme.colors.primary};
    transition: color .5s;
  }
`

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => position ? 'flex-start' : 'flex-end'};
  
  padding: 5px;
  margin: 0px 10px;

  border-radius: 20px;
  
  background: ${theme.colors.white};

  width: 130px;
  height: 40px;
`

const StyledBox = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: ${theme.colors.primary};
`

const Switch = () => {
  const [position, setPosition] = useState(false)

  const handleClick = () => {
    setPosition(!position)
  }

  return (
    <StyledWrapper position={position} labelLeft="newer" labelRight="older">
      <StyledButton
        type="button"
        onClick={() => handleClick()}
        position={position}
      >
        <StyledBox layout></StyledBox>
      </StyledButton>
    </StyledWrapper>
  )
}

export default Switch
