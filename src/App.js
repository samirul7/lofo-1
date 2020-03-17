import React from 'react'
import './App.css' 

import { Route, Switch} from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import SignInPage from './pages/sign-in/sign-in.component'
import SignUpPage from './pages/sign-up/sign-up.component'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLogin : false
    }
  }

  render() {
    const { isLogin } = this.state;
    return(
      <div className='App'>
        <Header isLogin={this.state.isLogin}/>
        <Switch>
        <Route path='/' exact component={HomePage} />
          <Route path='/sign-in' exact component={isLogin?null:SignInPage} />
          <Route path='/sign-up' exact component={isLogin?null:SignUpPage} />
        </Switch>
      </div>
    )
  }
  
}

export default App;