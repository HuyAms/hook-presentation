import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
        <div className="Home">
          <ul>
            <li><Link to="/motivation">Motivation</Link></li>
            <li><Link to="/01">1. UseState</Link></li>
            <li><Link to="/02">1. CustomHook</Link></li>
          </ul>

        </div>
    );
  }
}

export default Home;
