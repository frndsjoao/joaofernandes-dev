import { Switch, Route } from 'react-router-dom'

import InProgress from '../pages/InProgress'
import HomePage from '../pages/HomePage'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={InProgress} />
    </Switch>
  )
}

export default Routes
