import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import { setUser } from './reducers/user-reducer'
import Notes from './pages/Notes/Notes'
import Navbar from './components/Navbar/Navbar'
import LogSign from './pages/LogSign/LogSign'

const App = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const storeUserJSON = window.localStorage.getItem('loggedUser')
    if (storeUserJSON) {
      const user = JSON.parse(storeUserJSON)
      dispatch(setUser(user))
    }
  }, [dispatch])

  return (
    <Layout>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logsign">
            <LogSign />
          </Route>
          <Route exact path="/notes">
            <Notes />
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  )
}

export default App
