import colors from './colors'
import typography from './typography'
import layout from './layout'
import buttons from './variants/buttons'
import framerVar from './variants/framerVariants'
import framerTrans from './variants/framerTransitions'

export const theme = {
  colors,
  ...typography,
  ...layout,
  buttons,
  framerVar,
  framerTrans,
}
