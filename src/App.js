import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends React.Component{

   constructor(props) {
      super(props);
      this.state = { userName: '', password:'' };
      this.updatePassword = this.updatePassword.bind(this);
      this.updateUserName = this.updateUserName.bind(this);

   }
   updateUserName ( event ){
      this.setState( {userName: event.target.value} );
   }

   updatePassword( event ){
      this.setState( {password: event.target.value} );
   }

   render(){
      return(
         <form className="form">
         <input type="text"
         value={this.state.userName} onChange={this.updateUserName} placeholder="username"/>
         <input type="password"
         value={this.state.password} onChange={this.updatePassword} placeholder="password"/>
         <button type="submit" className="btn">Login</button>
         </form>
      );
   }
};

ReactDOM.render( <App />, document.getElementById('app') );

