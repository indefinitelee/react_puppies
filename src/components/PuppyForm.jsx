// import the libs we need
import React, { Component } from 'react';
import style from './PuppyForm.css';

// create a React Component called _App_
class PuppyForm extends Component {

  render(){
    console.log(this.props);
    return (
      <div id="puppy-form-container">
        <input
          type="text"
          placeholder="Enter your pup's name"
          value={this.props.name}
          onChange={this.props.updateNameForm}
        />
        <input
          type="text"
          placeholder="Silly GIF url"
          value={this.props.url}
          onChange={this.props.updateURLForm}
        />
        <button>Adopt! :)</button>
      </div>
    );
  }
}

export default PuppyForm;

