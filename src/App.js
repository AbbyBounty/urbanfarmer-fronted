import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/signup" component={SignupScreen} />
            <Route path="/home" component={HomeScreen} />
            <Route path="/" component={SigninScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
