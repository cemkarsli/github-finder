import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Components/Navbar';
import UserList from './Components/UserList';
import React, { Component } from 'react';
import Search from './Components/Search';
import Allert from './Components/Allert';
class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
      error: null
    };
  }

  
  SearchUsers = (keyword) => {
    this.setState({loading: true});
    setTimeout(() => {
     fetch(`https://api.github.com/search/users?q=`+ keyword)
     .then(response => response.json())
     .then(data => this.setState({users: data.items , loading: false}));
    }, 1000);
  }



  ClearResults = () => {
    this.setState({users: []});
  }

  DisplayAlert = (msg,type) => {
    this.setState(
        {error:{
        msg:msg,
        type:type
      } })
      setTimeout(() => {
        this.setState({error: null});
      }, 3000);
  }


  render() {
    return (
      <div>
        <Navbar title="Github Finder" />
        <Search searchUsers={this.SearchUsers}  
        showClear={this.state.users.length > 0} 
        clearResults={this.ClearResults}
        DisplayAlert={this.DisplayAlert}
         />
         <Allert error={this.state.error} />
        <hr className="my-5" />
        <UserList users={this.state.users}  loading={this.state.loading} />
      </div>
    );
  }
}



export default App;
