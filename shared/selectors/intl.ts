import cookie from 'react-cookie'

export const getInitialLang = () => ({
  locale: cookie.load('lang') || 'en'
})
