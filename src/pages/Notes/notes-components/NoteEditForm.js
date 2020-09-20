import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import moment from 'moment'
import Calendar from 'react-calendar'
import { FaCalendar } from 'react-icons/fa'
import { editNoteRedux } from '../../../reducers/note-reducer'
import { P } from '../../../components/P/P'
import { Box } from '../../../components/Box/Box'
import { Textbox } from '../../../components/Textbox/Textbox'
import { Button } from '../../../components/Button/Button'
import { theme } from '../../../styles/theme'
import { StyledDateInput } from '../../../components/Input/Input'
import Modal from '../../../components/Modal/Modal'

const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.lightGrey};
  padding: 5px;
  border-radius: 0px 0px 8px 8px;
`

const NoteEditForm = ({ content, setEditable, id }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState(null)

  const { register, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)

  const handleNoteEdit = ({ textbox }) => {
    setEditable(false)
    let formattedDueDate = null
    if (date !== null) {
      formattedDueDate = moment(date).format('YYYY-M-D')
    }
    if (loggedUser) {
      dispatch(editNoteRedux(id, textbox, loggedUser.token, formattedDueDate))
    } else {
      dispatch(editNoteRedux(id, textbox, null, formattedDueDate))
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

      <Button
        variant="transparent"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <FaCalendar />
        <StyledDateInput
          type="text"
          placeholder="Due date"
          value={date === null ? '' : moment(date).format('MMM Do YYYY')}
          readOnly={true}
          fontSize={theme.fontSize.normal}
        />
      </Button>
      <Modal
        buttonLabel="Save due date"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Calendar
          onChange={(nextDate) => setDate(nextDate)}
          value={date}
          minDate={new Date()}
        />
      </Modal>

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
