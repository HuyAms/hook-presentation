import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Home extends Component {
  render() {
    return (
        <div className="Home">
          <h1>Home</h1>
          <ul>
            <li><Link to="/motivation">0. Motivation</Link></li>
            <li><Link to="/01">1. UseState</Link></li>
            <li><Link to="/02">2. CustomHook</Link></li>
            <li><Link to="/03">3. ReuseLogic - Part1</Link></li>
            <li><Link to="/04">4. ReuseLogic - Part2</Link></li>
          </ul>
        </div>
    );
  }
}

export default Home;
