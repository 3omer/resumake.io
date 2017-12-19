/**
 * @flow
 */

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { ScrollToTop } from './features/ui/components'
import { Home, Generator, About } from './pages'
import { colors } from './features/ui/theme'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 0.95em;
    background: ${colors.background};
    color: #ababab;
  }

  ::selection {
    background: ${colors.primary};
    color: white;
  }
`

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/generator" component={Generator} />
          <Route path="/about" component={About} />
          <Route path="*" render={() => <h1>ono 404</h1>} />
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default App
