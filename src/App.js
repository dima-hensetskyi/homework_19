import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

import './App.css';

function App() {
    return (
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
}

export default App;
