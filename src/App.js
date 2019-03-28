import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './excercises/Home';
import Motivation from './excercises/Motivation';
import E01 from './excercises/01';
import E02 from './excercises/02';
import E03 from './excercises/03';
import E04 from './excercises/04';
import E01S from './solution/01';
import E02S from './solution/02';
import E03S from './solution/03';
import E04S from './solution/04';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/motivation" component={Motivation}/>
            <Route path="/01" component={E01}/>
            <Route path="/02" component={E02}/>
            <Route path="/03" component={E03}/>
            <Route path="/04" component={E04}/>
            <Route path="/01S" component={E01S}/>
            <Route path="/02S" component={E02S}/>
            <Route path="/03S" component={E03S}/>
            <Route path="/04S" component={E04S}/>
            <Route path="/" component={Home}/>
            <Redirect to="/"/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
