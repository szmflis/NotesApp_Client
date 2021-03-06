import React, { useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { motion, AnimatePresence } from 'framer-motion'
import { Box } from '../../components/Box/Box'
import { P } from '../../components/P/P'
import { theme } from '../../styles/theme'
import Signup from './Signup'
import Login from './Login'

const StyledWrapper = styled(Box)`
  align-items: center;
  text-align: left;

  min-width: ${theme.sizes[8]}px; 
  width: 30vw;

  @media (max-width: 820px) {
    min-width: 0;
    width: 100vw;
  }
`

const StyledSwitch = styled.div`
  cursor: pointer;
  display: flex;

  width: 50%;
  height: 50px;

  justify-content: center;
  align-items: center;

  background-color: ${({ isActive }) => isActive ? theme.colors.primary : theme.colors.grey};
  transition: 0.5s background-color;
  &:hover {
    background-color: ${darken(0.1, theme.colors.primary)};
  }
`

const LogSign = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={theme.framerVar.scaleFadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <StyledWrapper>
        <Box direction="row" pad="0" justify="center" width="80%" mar="20px 0px">
          <StyledSwitch isActive={isLogin ? true : false} onClick={() => setIsLogin(true)}>
            <P color={theme.colors.white} fontSize={theme.fontSize.big}>
              Login
            </P>
          </StyledSwitch>
          <StyledSwitch isActive={isLogin ? false : true} onClick={() => setIsLogin(false)}>
            <P color={theme.colors.white} fontSize={theme.fontSize.big}>
              Signup
            </P>
          </StyledSwitch>
        </Box>
        <AnimatePresence exitBeforeEnter>
          { isLogin ? <Login key="login" /> : <Signup key="signup" /> }
        </AnimatePresence>
      </StyledWrapper>
    </motion.div>
  )
}

export default LogSign
