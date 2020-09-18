import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { changeSortingOrder } from '../../reducers/sorting-reducer'
import { theme } from '../../styles/theme'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 5px;
  padding: 5px;

  &:before {
    content: '${({ labelLeft }) => labelLeft}';
    text-align: center;
    width: 30%;
    font-weight: ${theme.fontWeight.bold};
    color: ${({ position }) => position === 'left' ? theme.colors.primary : theme.colors.black};
    transition: color .5s;
  }

  &:after {
    content: '${({ labelRight }) => labelRight}';
    text-align: center;
    width: 30%;
    font-weight: ${theme.fontWeight.bold};
    color: ${({ position }) => position === 'right' ? theme.colors.primary : theme.colors.black};
    transition: color .5s;
  }
`

const StyledButton = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: ${({ position }) => position === 'left' ? 'flex-start' : 'flex-end'};

  padding: 5px;
  margin: 2px;
  border-radius: 20px;
  background: ${theme.colors.white};

  width: 40%;
  height: 20px;
`

const StyledBox = styled(motion.div)`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${theme.colors.primary};
`

const Switch = ({
  labelLeft, labelRight, stateLeft, stateRight
}) => {
  const [position, setPosition] = useState('left')

  const dispatch = useDispatch()

  const handleClick = () => {
    if (position === 'left') {
      setPosition('right')
      dispatch(changeSortingOrder(stateLeft))
    } else if (position === 'right') {
      setPosition('left')
      dispatch(changeSortingOrder(stateRight))
    }
  }

  return (
    <StyledWrapper
      position={position}
      labelLeft={labelLeft}
      labelRight={labelRight}
    >
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

Switch.propTypes = {
  labelLeft: PropTypes.string.isRequired,
  labelRight: PropTypes.string.isRequired,
  stateLeft: PropTypes.string.isRequired,
  stateRight: PropTypes.string.isRequired
}

export default Switch
