import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { Home } from './containers'
import defaultTheme from './styles/theme'

export default function Routes() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Switch>
        <Route exact path="/" component={Home} />\
      </Switch>
    </ThemeProvider>
  )
}
