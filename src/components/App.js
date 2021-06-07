import { AuthProvider } from '../contexts/AuthContext';
import Signup from './authentication/Signup';
import Dashboard from './Dashboard';
import Login from './authentication/Login';
import UpdateProfile from './authentication/UpdateProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';
import CheckLoginRoute from './authentication/CheckLoginRoute';
import ForgotPassword from './authentication/ForgotPassword';

function App() {
  return(
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard}/>
              <PrivateRoute  path="/update-profile" component={UpdateProfile}/>
              <CheckLoginRoute path="/signup" component={Signup}/>
              <CheckLoginRoute path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
            </Switch>
          </AuthProvider>     
        </Router>
  );
}
export default App;
