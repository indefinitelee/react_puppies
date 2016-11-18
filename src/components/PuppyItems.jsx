// import the libs we need
import React, { Component } from 'react';
import style from './PuppyItems.css';

// create a React Component called _App_
class PuppyItems extends Component {

  render(){
    return (
      <div className="puppy-list-item">
        <h4>{this.props.name}</h4>
        <div id="puppy-image">
          <img src={this.props.url} alt={this.props.id}/>
        </div>
        <p>Likes: {this.props.likes}</p>
        <button onClick={() => this.props.handleLikePuppy(this.props.id)}>Like!</button>
        <button onClick={() => this.props.handleAbandonment(this.props.id)}
          >Abandon</button>
      </div>
    );
  }
}

export default PuppyItems;
