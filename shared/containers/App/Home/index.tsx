/* @jsx */

import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import style from './style.css'

interface Props extends RouteComponentProps<void> {
  locale: Locale
}

export default class Home extends Component<Props, {}> {
  render() {
    return (
      <div className={style.home}>hello, world</div>
    )
  }
}
