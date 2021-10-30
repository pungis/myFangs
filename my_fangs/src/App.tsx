import { BrowserRouter as Router } from 'react-router-dom';
import WelcomeScreen from './view/WelcomeScreen/WelcomeScreen';
import { Route, Switch } from "react-router";
import Dashboard from './view/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeScreen}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch> 
    </Router>
  );
}

export default App;
