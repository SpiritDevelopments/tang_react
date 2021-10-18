import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch} from "react-router-dom";

//template
import Default from './example/Default';
import Login from './example/Login';
// import { render } from '@testing-library/react';

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
      <switch>
        <Route path="/" component={Default} />
        <Route exact path="/login" component={Login} />

      </switch>
    </BrowserRouter>
  );
  }
}

export default App;