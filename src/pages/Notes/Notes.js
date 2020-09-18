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
import Note from './Note'
import NewNoteForm from './NewNoteForm'
import Switch from '../../components/Switch/Switch'
import { Input } from '../../components/Input/Input'

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        if (a.dueDate === null) {
          return +1
        }
        if (b.dueDate === null) {
          return -1
        }
        return moment(b.dueDate).toDate() - moment(a.dueDate).toDate()
      case 'dueDateAsc':
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
      <Box width="100rem" align="center">
        <P fontSize={theme.fontSize.bigger}>
          {loggedUser !== null
            ? `${loggedUser.name} ( ${notes.length} notes )`
            : 'unlogged user'}
        </P>
      </Box>
      <Box direction="row" justify="space-between" width="100rem" padding="0" margin="0" color={theme.colors.white}>
        <Box width="29rem" margin="0">
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
              onChange={({target}) => setSearch(target.value)}
            />
          </StyledInputWrapper>

        </Box>
        <Box width="70rem" margin="0" padding="0" color={theme.colors.white}>
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
        </Box>
      </Box>
    </StyledWrapper>
  )
}

export default Notes
