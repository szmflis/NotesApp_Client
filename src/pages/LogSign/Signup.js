import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { P } from '../../components/P/P'
import { Button } from '../../components/Button/Button'
import { theme } from '../../styles/theme'
import registrationService from '../../services/users'
import { setUser } from '../../reducers/user-reducer'
import { setNotification } from '../../reducers/notification-reducer'
import { Input, InputWrapper } from '../../components/Input/Input'
import Notification from '../../components/Notification/Notification'
import loginService from '../../services/login'

const StyledWrapper = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`

const Signup = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSignup = async ({ username, password, name }) => {
    const responseData = await registrationService.register({ username, password, name })

    if (responseData.error) {
      dispatch(setNotification({
        text: responseData.error,
        type: 'error'
      }))
    } else {
      const user = await loginService.login({
        username: responseData.username,
        password
      })
      dispatch(setUser(user))
      history.push('/notes')
    }
  }

  return (
    <StyledWrapper
      onSubmit={handleSubmit(handleSignup)}
      initial="out"
      animate="in"
      exit="out"
      variants={theme.framerVar.fadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <P fontSize={theme.fontSize.big}>Sign Up for Free</P>
      <InputWrapper>
        <P>Username | email</P>
        <Input
          placeholder="...username"
          type="text"
          name="username"
          ref={register({
            required: 'Username must be between 5 to 30 characters',
            minLength: {
              value: 5,
              message: 'Username too short!'
            },
            maxLength: {
              value: 30,
              message: 'Username too long!'
            },
            validate: value => value.replace(/\s/g, '').length === value.length || 'Username cannot contain whitespaces!'
          })}
        />
        {errors.username && <P color={theme.colors.danger}>{errors.username.message}</P>}
      </InputWrapper>
      <InputWrapper>
        <P>Name</P>
        <Input
          placeholder="...name"
          type="text"
          name="name"
          ref={register({
            required: 'Name must be between 5 to 30 characters',
            minLength: {
              value: 3,
              message: 'Name too short!'
            },
            maxLength: {
              value: 30,
              message: 'Name too long!'
            },
          })}
        />
        {errors.name && <P color={theme.colors.danger}>{errors.name.message}</P>}
      </InputWrapper>
      <InputWrapper>
        <P>Password</P>
        <Input
          placeholder="...password"
          type="password"
          name="password"
          ref={register({
            required: 'password must be between 5 to 30 characters',
            minLength: {
              value: 5,
              message: 'password too short!'
            },
            maxLength: {
              value: 30,
              message: 'password too long!'
            },
            validate: value => value.replace(/\s/g, '').length === value.length || 'Password cannot contain whitespaces!'
          })}
        />
        {errors.password && <P color={theme.colors.danger}>{errors.password.message}</P>}
      </InputWrapper>
      <Button variant="primary" type="submit" margin="20px 0px">
        <P color={theme.colors.white} fontSize={theme.fontSize.big}>
          Sign Up!
        </P>
      </Button>
      <Notification />
    </StyledWrapper>
  )
}

export default Signup
