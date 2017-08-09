// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Presentation.css';



function Change(props) {
  return(
    <button className="change-button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Image extends React.Component{
  render() {
    return(
      <img src={'C:/Users/novackoan/Documents/tic-tac-toe/my-app/src/mountains.jpg'} alt="boohoo" className="img-responsive" />
    );
  }
}

class Video extends React.Component{
  render() {
    return(
      <video className="video" autoPlay="true">
        <source  src={'C:/Users/novackoan/Documents/GitHub - source tree/tb4-tv/P1040326.mp4'} type="video/mp4"/>
      </video>
    );
  }
}

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      change: 'Play video',
      notVideo: true,
    };
  }

  handleClick() {
    var change = this.state.change.slice();
    change = this.state.notVideo ? 'Show image' : 'Play video';
    this.setState({
      change: change,
      notVideo: !this.state.notVideo,
    });
  }

  renderChange() {
    return (
      <Change 
        value={this.state.change}
        onClick={() => this.handleClick()}
      />
    );
  }

  renderObject() {
    if (this.state.notVideo) {
        return (
          <Image />
        );
      } else {
        return (
          <Video />
        );
      }   
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Link to="/">to Home</Link>
          <div className="button">
            {this.renderChange()}
          </div>
          <div className="object">
            {this.renderObject()}  
          </div>
          
        </div>
      </div>
    );
  }
}
