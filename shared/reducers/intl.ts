import { handleActions } from 'utils/redux-actions'
import { getInitialLang } from 'selectors/intl'
import * as actions from 'actions/intl'

export default handleActions({
  [actions.setLocale] (state: any, action: any) {
    state.locale = action.payload
  }
}, getInitialLang())
