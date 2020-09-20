import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUser } from '../../reducers/user-reducer'
import { initializeNotes } from '../../reducers/note-reducer'
import { theme } from '../../styles/theme'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${theme.colors.darkGrey};
  padding: ${theme.space[4]}px;
`

// NavElementWrappers set their width equally and together span entire navbar width,
// Then justifying their content can be used to space NavElements
// Without worrying about their width messing up their spacing
const NavElementWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ justify }) => justify};
`

const NavElement = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.big};

  padding: ${theme.space[2]}px;

  background:
    linear-gradient(${theme.colors.yellow}, ${theme.colors.yellow}) 
    bottom left no-repeat;
  
  background-size: 0px 3px;
  transition: .3s;

  &:hover {
    color: ${theme.colors.white};
    background-size: 100% 3px;
    opacity: 1;
  }
`

const Navbar = () => {
  const loggedUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setUser(null))
    dispatch(initializeNotes([]))
    window.localStorage.removeItem('loggedUser')
  }

  return (
    <StyledNavbar>
      <NavElementWrapper justify="flex-start">
        <NavElement as={Link} to="/">LOGOPLACE</NavElement>
      </NavElementWrapper>
      <NavElementWrapper justify="center">
        <NavElement as={Link} to="/notes">Notes</NavElement>
      </NavElementWrapper>
      {
        loggedUser === null ? (
          <NavElementWrapper justify="flex-end">
            <NavElement as={Link} to="/logsign">Sign</NavElement>
          </NavElementWrapper>
        ) : (
          <NavElementWrapper justify="flex-end">
            <NavElement as={Link} to="/" onClick={handleLogout}>Logout</NavElement>
          </NavElementWrapper>
        )
      }
    </StyledNavbar>
  )
}

export default Navbar
