import React from 'react'
import Header from './Header'
import {Container} from 'react-bootstrap'
import './Layout.css'

const Layout = (props) => {

  return (
      <div>
        <Header/>
        <main className='main-layout'>
          <Container>
            {props.children}
          </Container>
        </main>
      </div>
  )
}

export default Layout
