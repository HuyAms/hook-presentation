import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './excercises/Home';
import Motivation from './excercises/Motivation';
import E01 from './excercises/01';
import E02 from './excercises/02';
import E03 from './excercises/03';
import E04 from './excercises/04';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/motivation" component={Motivation}/>
          <Route path="/01" component={E01}/>
          <Route path="/02" component={E02}/>
          <Route path="/03" component={E03}/>
          <Route path="/03-renderprops" component={ReuseLoginRenderProp}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
