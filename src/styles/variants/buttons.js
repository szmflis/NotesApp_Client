import { lighten, darken } from 'polished'
import colors from '../colors'

export default {
  primary: {
    background: colors.primary,
    '&:hover': {
      background: lighten(0.1, colors.primary),
    }
  },
  cancel: {
    background: colors.danger,
    '&:hover': {
      background: darken(0.1, colors.danger),
    }
  },
  disabled: {
    cursor: 'inherit',
    background: colors.disabled,
    '&:hover': {
      background: colors.disabled,
    },
    '&:active': {
      outline: 'none'
    },
    '&:focus': {
      outline: 'none'
    },
  }
}
