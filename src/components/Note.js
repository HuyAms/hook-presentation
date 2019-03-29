import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {FaCheck, FaExclamation} from 'react-icons/fa'
import './Note.css';

class Note extends Component {
  render() {
    return (
        <div className="note">
          <div className="why">
            <h1>Why?</h1>
            <ul>
              <li>Javascript</li>
              <li>Lifecycle</li>
              <li> Reuse stateful logic</li>
            </ul>
          </div>
          <div className="what">
            <h1>What is Hook?</h1>
            <Card body>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</Card>
          </div>
          <div className='rule'>
            <h1>Rule of Hook</h1>
            <ul>
              <li><FaCheck color='green'/> Only Call Hooks at the Top Level</li>
              <li><FaCheck color='green'/> Call Hooks from React function components</li>
              <li><FaCheck color='green'/> Call Hooks from custom Hooks</li>
              <br/>
              <li><FaExclamation color='red'/> Don’t call Hooks inside loops, conditions, or nested functions</li>
              <li><FaExclamation color='red'/> Don’t call Hooks from regular JavaScript functions</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Note;

