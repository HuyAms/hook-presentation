import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import './Motivation.css';

class Motivation extends Component {
  render() {
    return (
        <div className="motivation">
          <div>
            <h1>Why?</h1>
            <ul>
              <li>Javascript</li>
              <li>Lifecycle</li>
              <li> Reuse stateful logic</li>
            </ul>
          </div>
          <div>
            <h1>What is Hook?</h1>
            <Card body>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</Card>
          </div>
        </div>
    );
  }
}

export default Motivation;

