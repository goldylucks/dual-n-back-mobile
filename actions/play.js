import { createAction } from 'redux-actions'

export const playInterval = createAction('play interval')
export const resetBoard = createAction('reset board')
export const startGame = createAction('start game')

export const guessPosition = createAction('guess position')
export const guessPositionCorrect = createAction('guess positionCorrect')
export const guessPositionWrong = createAction('guess positionWrong')

export const guessColor = createAction('guess color')
export const guessColorCorrect = createAction('guess colorCorrect')
export const guessColorWrong = createAction('guess colorWrong')

export const toggleMode = createAction('toggle mode')
export const incrementN = createAction('increment n')
export const decrementN = createAction('decrement n')

export const routeHome = createAction('route home')
