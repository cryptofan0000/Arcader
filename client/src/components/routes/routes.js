import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router-dom'

import MainHeader from '../layout/mainheader'
import Sidebar from '../layout/sidebar'

import Speculators from '../speculators/index'

const Routes = props => {
  return (
    <Fragment>
      <MainHeader />
      <Sidebar />
      <Switch>
        <Route exact path='/speculators' component={Speculators} />
      </Switch>
    </Fragment>
  )
}

export default Routes