import React, {Component} from 'react';
import {
   BrowserRouter as Router,
   Route,
   Redirect,
   Switch
} from 'react-router-dom';

import Login from './Login/Login';
import Name from  './Name/Name';

import a from './test1';

console.log(a(5));

const isAuthenticated = () => {
   return sessionStorage.getItem('logined') === 'true';
};

/*eslint-disable*/
const PrivateRoute = ({component: Component, ...rest}) => (
   <Route {...rest} render={props => {
      if(isAuthenticated()) {
         return (
            <Component {...props}/>
         );
      }

      return (
         <Redirect to={{
            pathname: '/login',
            state: {from: props.location}
         }}/>
      );
   }}/>
);
/*eslint-enable*/

class App extends Component {
   render() {
      return (
         <Router>
            <Switch>
               <Route path="/login" component={Login}/>
               <Route path="/" exact render={() => <Redirect to="/index" />}/>
               <PrivateRoute path="/index" component={Name} />
               <Route path="/404" render={() => <div>404</div>}/>
               <Redirect to="/404"/>
            </Switch>
         </Router>
      );
   }
}

export default App;