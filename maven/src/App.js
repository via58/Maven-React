import './App.css';
import { Login } from './Login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Dashboard} from './Dashboard/dashboard'
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
