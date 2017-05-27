import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Button} from 'antd';

require('./name.css');

class Name extends Component {
   static propTypes = {
      history: React.PropTypes.object,
      match: React.PropTypes.object
   };

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <div className="name-color">Charles 112333 ...</div>
            <Button onClick={() => {
               sessionStorage.removeItem('logined');
               this.props.history.push('/');
            }}>Logout</Button>
            <img src={require('images/refresh-icon.png')} alt=""/>
            <Route path={`${this.props.match.url}/name-1`} render={() => <div>name-1</div>} />
            <Route path="/name/name-2" render={() => <div>name-2</div>} />
         </div>
      );
   }
}

export default Name;