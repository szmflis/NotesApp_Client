import React from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { P } from '../P/P'
import { theme } from '../../styles/theme'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  return (
    <AnimatePresence>
      {
      notification !== null
        ? (
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={theme.framerVar.fadeInOut}
            transition={theme.framerTrans.fastTrans}
          >
            <P
              color={
                notification.type === 'error'
                  ? theme.colors.danger
                  : theme.colors.primary
              }
              fontSize={theme.fontSize.big}
              fontWeight={theme.fontWeight.bold}
            >{notification.text}</P>
          </motion.div>
        )
        : null
      }
    </AnimatePresence>
  )
}

export default Notification
