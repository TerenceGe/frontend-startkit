import { takeEvery } from 'redux-saga/effects'
import { Action } from 'redux-actions'
import cookie from 'react-cookie'
import * as actions from 'actions/intl'

function setLocale(action: Action<object>) {
  cookie.save('lang', action.payload, {
    path: '/',
    domain: 'test.com',
    expires: new Date(Date.now() + (3600 * 1000 * 24 * 365))
  })
}

export default function* intlSaga() {
  yield takeEvery(String(actions.setLocale), setLocale)
}
