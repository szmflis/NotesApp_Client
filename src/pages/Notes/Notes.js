import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import moment from 'moment'
import { loadUserNotes } from '../../services/notes'
import { initializeNotes } from '../../reducers/note-reducer'
import { Box } from '../../components/Box/Box'
import { P } from '../../components/P/P'
import { theme } from '../../styles/theme'
import Note from './notes-components/Note'
import NewNoteForm from './notes-components/NewNoteForm'
import Switch from '../../components/Switch/Switch'
import { Input } from '../../components/Input/Input'

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1100px;

  @media (max-width: 1110px) {
    padding: 0px 10px;
    width: 100vw;
  }
`

const StyledContentWrapper = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const StyledConsole = styled(Box)`
  width: 30%;

  @media (max-width: 700px) {
    flex-direction: row;
    width: 100%;
  }
`

const StyledNotesContainer = styled(Box)`
  width: 69%;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: ${theme.space[3]}px;
  }
`

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Notes = () => {
  const loggedUser = useSelector(state => state.user)
  const sortingOrder = useSelector(state => state.order)
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      if (loggedUser !== null) {
        const userData = await loadUserNotes(loggedUser.id)
        console.log(userData)
        dispatch(initializeNotes(userData))
      }
    }
    if (notes.length === 0) {
      fetchData()
    }
  }, [dispatch, loggedUser, notes.length])

  const sortNotes = (a, b) => {
    switch (sortingOrder) {
      case 'dateDesc':
        return moment(b.date).toDate() - moment(a.date).toDate()
      case 'dateAsc':
        return moment(a.date).toDate() - moment(b.date).toDate()
      case 'lengthDesc':
        return a.content.length - b.content.length
      case 'lengthAsc':
        return b.content.length - a.content.length
      case 'dueDateDesc':
        if (a.dueDate === null && b.dueDate === null) {
          return 0
        }
        if (b.dueDate === null) {
          return -1
        }
        if (a.dueDate === null) {
          return +1
        }
        return moment(b.dueDate).toDate() - moment(a.dueDate).toDate()
      case 'dueDateAsc':
        if (a.dueDate === null && b.dueDate === null) {
          return 0
        }
        if (b.dueDate === null) {
          return -1
        }
        if (a.dueDate === null) {
          return +1
        }
        return moment(a.dueDate).toDate() - moment(b.dueDate).toDate()
      default:
        return null
    }
  }

  return (
    <StyledWrapper
      initial="out"
      animate="in"
      exit="out"
      variants={theme.framerVar.fadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <Box width="100%" align="center">
        <P fontSize={theme.fontSize.bigger}>
          {loggedUser !== null
            ? `${loggedUser.name} ( ${notes.length} notes )`
            : 'unlogged user'}
        </P>
      </Box>
      <StyledContentWrapper color="transparent" pad="0" mar="0">
        <StyledConsole mar="0">
          <NewNoteForm />
          <StyledInputWrapper>
            <P
              fontSize={theme.fontSize.big}
              borderBottom="1px solid grey"
              margin="20px 0px 10px 0px"
            >Sort Notes By</P>
            <Switch
              labelLeft="New"
              labelRight="Old"
              stateLeft="dateDesc"
              stateRight="dateAsc"
            />
            <Switch
              labelLeft="Long"
              labelRight="Short"
              stateLeft="lengthDesc"
              stateRight="lengthAsc"
            />
            <Switch
              labelLeft="Due soon"
              labelRight="Due late"
              stateLeft="dueDateDesc"
              stateRight="dueDateAsc"
            />

            <P
              fontSize={theme.fontSize.big}
              borderBottom="1px solid grey"
              margin="20px 0px 10px 0px"
            >Search</P>

            <Input
              padding="5px"
              width="80%"
              type="text"
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
          </StyledInputWrapper>
        </StyledConsole>
        <StyledNotesContainer color="transparent" textAlign="left" mar="0" pad="0">
          <AnimatePresence>
            {
              notes.concat()
                .filter(note => note.content.toLowerCase().includes(search.toLowerCase()))
                .sort(sortNotes)
                .map(note => <Note
                  content={note.content}
                  date={note.date}
                  dueDate={note.dueDate}
                  author={loggedUser !== null ? loggedUser.name : 'unlogged user'}
                  key={note.id}
                  id={note.id}
                />)
            }
          </AnimatePresence>
        </StyledNotesContainer>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default Notes
