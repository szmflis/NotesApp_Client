import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import { editNoteRedux } from '../../reducers/note-reducer'
import { P } from '../../components/P/P'
import { Box } from '../../components/Box/Box'
import { Textbox } from '../../components/Textbox/Textbox'
import { Button } from '../../components/Button/Button'
import { theme } from '../../styles/theme'

const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.lightGrey};
  padding: 5px;
  border-radius: 0px 0px 8px 8px;
`

const NoteEditForm = ({ content, setEditable, id }) => {
  const { register, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)

  const handleNoteEdit = ({ textbox }) => {
    setEditable(false)
    if (loggedUser) {
      dispatch(editNoteRedux(id, textbox, loggedUser.token))
    } else {
      dispatch(editNoteRedux(id, textbox))
    }
  }

  return (
    <StyledForm
      onSubmit={handleSubmit(handleNoteEdit)}
      initial="out"
      animate="in"
      exit="out"
      variants={theme.framerVar.scaleFadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <Textbox
        name="textbox"
        defaultValue={content}
        width="90%"
        ref={register({
          required: 'Has to be between 5 and 1024 characters',
          minLength: {
            value: 5,
            message: 'Note is too short'
          },
          maxLength: {
            value: 1024,
            message: 'Note is too long'
          },
          validate: value => value.trim().length !== 0 || 'Note cannot be only whitespace'
        })}
      />

      <Box padding="0" margin="0" direction="row" justify="space-around">
        <Button variant="primary" type="submit">
          <P color={theme.colors.white}>
            Save
          </P>
        </Button>
        <Button variant="cancel" type="button" onClick={() => setEditable(false)}>
          <P color={theme.colors.white}>
            Cancel
          </P>
        </Button>
      </Box>

      {errors.textbox && <P>{errors.textbox.message}</P>}
    </StyledForm>
  )
}

NoteEditForm.propTypes = {
  content: PropTypes.string.isRequired,
  setEditable: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default NoteEditForm
