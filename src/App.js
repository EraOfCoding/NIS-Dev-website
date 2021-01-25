import React from 'react'
import Home from './components/Home'
import Rules from './components/Rules'
import About from './components/About'
import Space from './components/Space'
import Error from './components/Error'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      update_data: '24/01/2021' // change whenever you update website
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rules" component={Rules}/>
            <Route path="/about" component={About}/>
            <Route path="*" component={Error}/>
          </Switch>
          <Space update_data = {this.state.update_data}/>
        </div>
      </Router>
    );
  }
}

export default App;
