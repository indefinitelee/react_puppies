// import the libs we need
import React, { Component } from 'react';
import PuppyForm from './PuppyForm.jsx';
import PuppyList from './PuppyList.jsx'
import './normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {

  constructor() {
    super();

    this.state = {
      puppies: [],
      nameForm: '',
      urlForm: ''
    };
  }

  getAllPuppies() {
    fetch(`/api/puppies`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        puppies: data
      });
    })
    .catch(err => console.log(err));
  }

  handleAbandonment(id) {
    fetch(`/api/puppies/${id}`, {
      method: 'delete'
    })
    .then(() => {
      const puppies = this.state.puppies.filter((pup) => {
        return pup.id != id;
      });
      this.setState({ puppies })
    })
    .catch(err => console.log(err));
  }

  handleLikePuppy(id) {
    fetch(`/api/puppies/like/${id}`, {
      method: 'put'
    })
    .then(() => {
      let puppies = this.state.puppies.map((puppy) => {
        if(puppy.id === id) puppy.likes += 1;
        return puppy;
      })
      this.setState({ puppies });
    })
    .catch(err => console.log(err));
  }

  updateNameForm(e) {
    this.setState({
      nameForm: e.target.value
    });
  }

  updateURLForm(e) {
    this.setState({
      urlForm: e.target.value
    });
  }

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to puppies API</h1>
        </header>
        <PuppyForm
          name={this.state.nameForm}
          url={this.state.urlForm}
          updateNameForm={event => this.updateNameForm(event)}
          updateURLForm={event => this.updateURLForm(event)}
        />
        <PuppyList
          getAllPuppies={this.getAllPuppies.bind(this)}
          puppies={this.state.puppies}
          handleAbandonment={this.handleAbandonment.bind(this)}
        />
      </div>
    );
  }
}

export default App;
