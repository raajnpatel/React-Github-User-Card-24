import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            users: []
        };
    }

    fetchUser = () => {
      axios
          .get('https://api.github.com/users/RaajnPatel')
          .then(response => {
              console.log(response);
              this.setState({users: response.data});
          })
          .catch(err => console.log(err));
    };

    render() {
     return(
         <button onClick = {this.fetchUser}>Click Me</button>
     )
    }
}

export default App;
