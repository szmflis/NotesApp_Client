import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { P } from '../../components/P/P'
import { Button } from '../../components/Button/Button'
import { theme } from '../../styles/theme'
import { setUser } from '../../reducers/user-reducer'
import { setNotification } from '../../reducers/notification-reducer'
import { Input, InputWrapper } from '../../components/Input/Input'
import loginService from '../../services/login'
import Notification from '../../components/Notification/Notification'

const StyledWrapper = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = async ({ username, password }) => {
    const user = await loginService.login({
      username, password
    })

    if (user.error) {
      dispatch(setNotification({
        text: user.error,
        type: 'error'
      }))
    } else {
      dispatch(setUser(user))
      history.push('/notes')
    }
  }

  return (
    <StyledWrapper
      onSubmit={handleSubmit(handleLogin)}
      initial="out"
      animate="in"
      exit="out"
      variants={theme.framerVar.fadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <P fontSize={theme.fontSize.big}>Welcome Back!</P>
      <InputWrapper>
        <P>Username | email</P>
        <Input
          placeholder="...username"
          type="text"
          name="username"
          ref={register()}
        />
        {errors.username && <P color={theme.colors.danger}>{errors.username.message}</P>}
      </InputWrapper>
      <InputWrapper>
        <P>Password</P>
        <Input
          placeholder="...password"
          type="password"
          name="password"
          ref={register()}
        />
        {errors.password && <P color={theme.colors.danger}>{errors.password.message}</P>}
      </InputWrapper>
      <Button variant="primary" type="submit" margin="20px 0px">
        <P color={theme.colors.white} fontSize={theme.fontSize.big}>
          Log In!
        </P>
      </Button>
      <Notification />
    </StyledWrapper>
  )
}

export default Login
