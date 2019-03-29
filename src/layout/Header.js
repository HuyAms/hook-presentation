import React from 'react'
import {Navbar} from 'react-bootstrap'
import ReactHook from '../assets/hook.png'
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {

  return (
      <nav className='main-nav'>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/home">
                <img
                    alt="React Hook"
                    src={ReactHook}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Link>
            {' React Hook'}
          </Navbar.Brand>
        </Navbar>
      </nav>
  )
}

export default Header;
