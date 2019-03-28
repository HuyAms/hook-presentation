import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Home extends Component {
  render() {
    return (
        <div className="Home">
          <h1>Home</h1>
          <ul>
            <li><Link to="/motivation">Motivation</Link></li>
            <li><Link to="/01">UseState</Link></li>
            <li><Link to="/02">CustomHook</Link></li>
            <li><Link to="/03">Pattern 1</Link></li>
            <li><Link to="/04">Pattern 2</Link></li>
          </ul>
        </div>
    );
  }
}

export default Home;
