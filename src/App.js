import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/home/:pass">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
