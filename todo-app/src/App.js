import React, {Component} from 'react'
import Home from './components/Home'
import Navbar from './layout/Navbar'
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
