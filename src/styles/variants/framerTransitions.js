const slowTrans = {
  type: 'tween',
  duration: 2,
  ease: 'easeOut',
}

const normalTrans = {
  type: 'tween',
  duration: 1,
  ease: 'easeOut',
}

const fastTrans = {
  type: 'tween',
  duration: 0.3,
  ease: 'easeOut',
}

export default {
  slowTrans,
  normalTrans,
  fastTrans
}

/*
  "linear"
  "easeIn", "easeOut", "easeInOut"
  "circIn", "circOut", "circInOut"
  "backIn", "backOut", "backInOut"
  "anticipate"
*/
