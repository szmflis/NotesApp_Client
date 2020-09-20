import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { darken } from 'polished'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { deleteNoteRedux, deleteNoteUnloggedUser } from '../../../reducers/note-reducer'
import { theme } from '../../../styles/theme'
import { P } from '../../../components/P/P'
import NoteEditForm from './NoteEditForm'

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${theme.space[4]}px;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.black};
  border-radius: 8px 8px 0px 0px ;
  padding: 0px 5px 0px;
`

const StyledContent = styled(motion.div)`
  font-size: ${theme.fontSize.big};
  padding: ${theme.space[4]}px;
  background: ${theme.colors.yellow};
  word-wrap: break-word;
  height: auto;
  border-radius: ${({ isDueDate }) => isDueDate ? '0' : '0px 0px 8px 8px'};
`

const StyledIconWrapper = styled(motion.div)`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 10px;

  font-weight: ${theme.fontWeight.regular};
  color: ${theme.colors.white};

  transition: color .5s;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const StyledDueDateWrapper = styled(motion.div)`
  background-color: ${darken(0.1, theme.colors.yellow)};
  border-radius: 0px 0px 8px 8px;
  text-align: center;
`

const Note = ({
  content, date, author, id, dueDate
}) => {
  const [editable, setEditable] = useState(false)

  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)

  const handleNoteDelete = () => {
    if (loggedUser) {
      dispatch(deleteNoteRedux(id, loggedUser.token))
    } else {
      dispatch(deleteNoteUnloggedUser(id))
    }
  }

  return (
    <StyledWrapper
      initial="out"
      animate="in"
      exit="out"
      variants={theme.framerVar.scaleFadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <StyledHeader>
        <P color={theme.colors.white}>{author}</P>
        <StyledIconWrapper onClick={() => setEditable(!editable)}>
          <FaEdit />
        </StyledIconWrapper>
        <StyledIconWrapper onClick={() => handleNoteDelete()}>
          <FaTrash />
        </StyledIconWrapper>
        <P color={theme.colors.white}>
          {moment(date).format('MMM Do YYYY, h:mm:ss')}
        </P>
      </StyledHeader>
      <AnimatePresence exitBeforeEnter>
        {editable ? (
          <NoteEditForm
            content={content}
            setEditable={setEditable}
            id={id}
            key={id}
          />
        ) : (
          <motion.div
            key={content}
            initial="out"
            animate="in"
            exit="out"
            variants={theme.framerVar.fadeInOut}
            transition={theme.framerTrans.fastTrans}
          >
            <StyledContent isDueDate={dueDate}>
              {content}
            </StyledContent>
            {dueDate ? (
              <StyledDueDateWrapper>
                Task due in {moment(dueDate).endOf('day').fromNow()}
              </StyledDueDateWrapper>
            ) : (
              null
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </StyledWrapper>
  )
}

Note.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]).isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
}

Note.defaultProps = {
  dueDate: null,
}

export default Note
