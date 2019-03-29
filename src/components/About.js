import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class About extends Component {

  getStart = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
        <div className="About">
          <div>
            <h1>About</h1>
            <ul>
              <li>Hooks introduction</li>
              <li>Excercises</li>
            </ul>
          </div>
          <div>
            <h1>Not about</h1>
            <ul>
              <li>Everything in Hooks</li>
              <li>100% very practical and complicated examples</li>
            </ul>
          </div>
          <Button onClick={this.getStart}>Get Started!</Button>
        </div>
    );
  }
}

export default About;
