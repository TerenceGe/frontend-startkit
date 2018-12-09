/* @tsx */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, RouteComponentProps } from 'react-router'
import { IntlProvider, /* FormattedMessage */ } from 'react-intl'
import 'normalize.css/normalize.css'
import 'resources/fonts/fonts.css'
import Title from 'components/DocumentTitle'
import style from './style.css'

const messages = require('./messages.json')

interface RouteComponent {
  key?: number
  path: string
  exact: boolean
  strict: boolean
  component: any
}

export interface Props extends RouteComponentProps<void> {
  locale?: string
  route: any
}

const renderRoutes = (routes: RouteComponent[], extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route: RouteComponent, i: number) => (
       <Route
         key={route.key || i}
         path={route.path}
         exact={route.exact}
         strict={route.strict}
         render={props => (<route.component {...props} {...extraProps} route={route} />)}
       />
     ))}
  </Switch>
) : null

@connect(
  (state: any) => ({
    locale: state.intl.get('locale')
  })
)

export default class App extends Component<Props, {}> {
  render() {
    const { locale, route } = this.props

    return (
      <IntlProvider messages={messages[locale as string]}>
        <div className={style.app}>
          <Title render="Frontend Startkit" />
          <div className={style.appContainer}>
            <div className={style.transitionContext}>
              <div className={style.content}>
                {renderRoutes(route.routes)}
              </div>
            </div>
          </div>
        </div>
      </IntlProvider>
    )
  }
}
