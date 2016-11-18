// import the libs we need
import React, { Component } from 'react';
import PuppyItems from './PuppyItems.jsx';
import style from './PuppyList.css';

// create a React Component called _App_
class PuppyList extends Component {

  renderAllPuppies() {
    return this.props.puppies.map((pup, i) =>
      <PuppyItems
        handleAbandonment={this.props.handleAbandonment}
        likes={pup.likes}
        name={pup.name}
        url={pup.url}
        id={pup.id}
        key={i}
      />
    )
  }

  componentWillMount() {
    this.props.getAllPuppies();
  }

  render(){
    return (
      <div id="puppy-list-container">
        {this.renderAllPuppies()}
      </div>
    );
  }
}

export default PuppyList;
