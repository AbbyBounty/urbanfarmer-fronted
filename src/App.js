import Routes from './routes.js'
import Header from './components/Header';
import { MyChart } from './chartjs.js';

function App() {
  return (
    <div>
      <Routes />
      <MyChart />
    </div>
  )
}

export default App


