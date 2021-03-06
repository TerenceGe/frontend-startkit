import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import intl from './intl'

export default combineReducers({
  router,
  form,
  intl
})
