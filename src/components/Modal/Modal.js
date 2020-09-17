import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import ReactDOM from 'react-dom'
import { Button } from '../Button/Button'
import { P } from '../P/P'
import { theme } from '../../styles/theme'

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
`

const StyledCenteredContent = styled.div`
  position: relative;
  left: -50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 15px;
  background-color: ${theme.colors.lightGrey};
`

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
  z-index: 1000;
`

const Modal = ({
  children, isOpen, onClose, buttonLabel
}) => {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <motion.div
      initial="out"
      animate="in"
      variants={theme.framerVar.fadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <StyledOverlay />
      <StyledWrapper>
        <StyledCenteredContent>
          <div>{children}</div>
          <Button onClick={onClose} type="button" variant="primary">
            <P
              color={theme.colors.white}
              fontWeight={theme.fontWeight.regular}
              fontSize={theme.fontSize.big}
            >
              {buttonLabel}
            </P>
          </Button>
        </StyledCenteredContent>
      </StyledWrapper>
    </motion.div>,
    document.getElementById('portal')
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string,
}

Modal.defaultProps = {
  buttonLabel: 'close'
}

export default Modal
