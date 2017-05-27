import React, {Component} from 'react';
import {Button} from 'antd';

class Login extends Component {
   static propTypes = {
      history: React.PropTypes.object
   };

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            Login page...
            <Button onClick={() => {
               sessionStorage.setItem('logined', 'true');
               this.props.history.push('/');
            }}>Login</Button>
         </div>
      );
   }
}

export default Login;