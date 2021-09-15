import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Home from './screens/HomeScreen'
import Header from './components/Header';

function Routes() {
    return (
        <div>
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/signup" component={SignupScreen} />
                        <Route path="/home" component={HomeScreen} />
                        <Route path="/products" component={ProductScreen} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Routes


