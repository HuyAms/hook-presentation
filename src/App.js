import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Motivation from './components/Motivation';
import UseState from './components/01';
import CustomHook from './components/02';
import ReuseLogic from './components/03';
import ReuseLoginRenderProp from './components/03-renderprops';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/motivation" component={Motivation}/>
          <Route path="/01" component={UseState}/>
          <Route path="/02" component={CustomHook}/>
          <Route path="/03" component={ReuseLogic}/>
          <Route path="/03-renderprops" component={ReuseLoginRenderProp}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
