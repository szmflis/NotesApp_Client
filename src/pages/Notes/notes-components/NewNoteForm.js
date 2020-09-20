import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import Calendar from 'react-calendar'
import { FaCalendar } from 'react-icons/fa'
import { addNoteRedux } from '../../../reducers/note-reducer'
import { Button } from '../../../components/Button/Button'
import { P } from '../../../components/P/P'
import { Textbox } from '../../../components/Textbox/Textbox'
import { StyledDateInput } from '../../../components/Input/Input'
import { theme } from '../../../styles/theme'
import Modal from '../../../components/Modal/Modal'

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const NewNoteForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState(null)
  const { register, handleSubmit, errors } = useForm()
  const loggedUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleNoteAdd = async ({ textbox }) => {
    let formattedDueDate = null
    if (date !== null) {
      formattedDueDate = moment(date).format('YYYY-M-D')
    }
    if (loggedUser === null) {
      dispatch(addNoteRedux({
        content: textbox,
        date: new Date(),
        id: Date.now().toString(),
        dueDate: formattedDueDate,
      }))
    } else {
      dispatch(addNoteRedux({
        content: textbox,
        userId: loggedUser.id,
        auth: loggedUser.token,
        dueDate: formattedDueDate,
      }))
    }
    setDate(null)
  }

  return (
    <StyledWrapper onSubmit={handleSubmit(handleNoteAdd)}>
      <P
        fontSize={theme.fontSize.big}
        borderBottom="1px solid grey"
        margin="7px"
      >
        Add new Note
      </P>
      <Textbox
        placeholder="New note text"
        name="textbox"
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
      <Button
        width="100%"
        variant="primary"
        type="submit"
      >
        <P color={theme.colors.white}>Save</P>
      </Button>
      {errors.textbox && <P>{errors.textbox.message}</P>}
    </StyledWrapper>
  )
}

export default NewNoteForm
