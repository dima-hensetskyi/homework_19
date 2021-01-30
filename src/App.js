import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/" component={SignUp}></Route>
      </Switch>
    </Router>
  </div>
);

export default App;
